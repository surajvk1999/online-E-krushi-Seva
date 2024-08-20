package com.cdac.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Optional;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.entity.Products;
import com.cdac.entity.Retailer;
import com.cdac.repository.ProductsRepository;
import com.cdac.repository.RetailerRepository;

@Service
@Transactional
public class ProductsService {
	
	
	@Autowired
	public ProductsRepository prodRepository;
	@Autowired
	public RetailerRepository retRepo;
	
	public boolean addProduct(Products products)
	{
		prodRepository.save(products);
		return true;
	}
	
	//Add Products
	public boolean addProduct(Products products, MultipartFile file) throws IOException
	{
		products.setImageData(ImageUtil.compressImage(file.getBytes()));
		prodRepository.save(products);
		return true;
	}
	
	
	//Fetch All Products
	public List<Products> getAllProducts()
	{
		return prodRepository.findAll();
		
	}
	
	public Products uploadImage(MultipartFile file, String productName, String chemicalName, String category,
			  String companyName, String weight, double price,  LocalDate expiryDate,int quantity, String shortDescription,
			  String description, String benefits, String targetedInsects, int RetailerIdFor) throws IOException {
		Products pImage = new Products();
		pImage.setImageData(file.getBytes());
		pImage.setProductName(productName);
		pImage.setChemicalName(chemicalName);
		pImage.setCategory(category);
		pImage.setCompanyName(companyName);
		pImage.setWeight(weight);
		pImage.setPrice(price);
		pImage.setExpiryDate(expiryDate);
		pImage.setQuantity(quantity);
		pImage.setShortDescription(shortDescription);
		pImage.setDescription(description);
		pImage.setBenefits(benefits);
		pImage.setTargetedInsects(targetedInsects);
		
		Retailer ret = retRepo.findById(RetailerIdFor);
		pImage.setProductsRetailer(ret);
		pImage.setRetailerIdFor(RetailerIdFor);
		return prodRepository.save(pImage);
	}
	
	
	public Products getProductByName(String productName, int id)
	{
		Products product = prodRepository.findByproductNameAndId(productName, id);
		if(product == null)
			System.out.println("null");
		return product;
		
	}
	
	public List<Products> getProducts(String category)
	{
		String s = (category.substring(0, 1).toUpperCase() + category.substring(1, category.length()).toLowerCase());
		List<Products> list = prodRepository.findByCategory(s);
		List<Products> list1 = prodRepository.findByChemicalName(s);
		List<Products> list2 = prodRepository.findByCompanyName(s);
		List<Products> list3 = prodRepository.findByProductName(s);
		
		if(list.size()!=0)
		{
			Collections.sort(list, (e1, e2) -> (int)(e1.getPrice()- e2.getPrice()) );
			return list;
		}
		else if(list1.size() != 0)
		{
			return list1;
		}
		else if(list2.size() != 0){
			return list2;
		}
		return list3;
	}
	
	public boolean updateRating(int rating, int id)
	{
		prodRepository.updateByRating(rating, id);
		return true;
	}
	
	public Products getProduct(int id)
	{
		Products pr= prodRepository.getOne(id);
		return pr;
	}
	
	public List<Products> getProductsByRetailerId(int retailerId)
	{
		List<Products> list = prodRepository.findRetailerProducts(retailerId);
		return list;
	}
	
	public void updateProd(double price, int quantity, LocalDate expiryDate, int id)
	{
		prodRepository.updateProduct(price, quantity, expiryDate, id);
	}
	
	
	public int getProductId(String productname, String weight, double price)
	{
		Products pr= prodRepository.findByProductNameAndWeightAndPrice(productname, weight, price);
		if(pr  != null)
			return pr.getId();
		return 0;
	}
	
	public boolean deleteProduct(int id)
	{
	    Products p = prodRepository.findById(id);
	    prodRepository.delete(p);
		return true;
	}
	
//	public List<Products> getProductsByDesc(String category, boolean b)
//	{
//		List<Products> list = prodRepository.findByCategory(category);
//		List<Products> list1 = prodRepository.findByChemicalName(category);
//		List<Products> list2 = prodRepository.findByCompanyName(category);
//		
//		if( b && list.size()!=0)
//		{
//			Collections.sort(list, (e1, e2) -> e1.getRating() - e2.getRating());
//			return list;
//		}
//		else if( list.size()!=0)
//		{
//			Collections.sort(list, (e1, e2) -> e2.getRating() - e1.getRating());
//			return list;
//		}
//		else if(b && list1.size() != 0)
//		{
//			Collections.sort(list1, (e1, e2) -> e1.getRating() - e2.getRating());
//			return list1;
//		}
//		else if(list1.size() != 0)
//		{
//			Collections.sort(list1, (e1, e2) -> e2.getRating() - e1.getRating());
//			return list1;
//		}
//		else if(b && list2.size() != 0)
//		{
//			Collections.sort(list2, (e1, e2) -> e1.getRating() - e2.getRating());
//			return list1;
//		}
//		Collections.sort(list2, (e1, e2) -> e2.getRating() - e1.getRating());
//		return list2;
//	}
}
