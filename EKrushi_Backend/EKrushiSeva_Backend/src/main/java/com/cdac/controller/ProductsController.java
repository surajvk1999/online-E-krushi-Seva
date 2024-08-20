package com.cdac.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import org.springframework.http.MediaType;
import com.cdac.entity.Products;
import com.cdac.entity.Retailer;
import com.cdac.repository.ProductsRepository;
import com.cdac.repository.RetailerRepository;
import com.cdac.service.ProductsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {

	@Autowired
	public ProductsService prodService;
	@Autowired
	public RetailerRepository retrepo;
	@Autowired
	public ProductsRepository prodRepo1;
	
	@PostMapping("/addProd")
	public String addProduct(@RequestBody Products products, @RequestParam int retailerIdFor) 
	{
		Retailer ret = retrepo.findById(retailerIdFor);
		products.setProductsRetailer(ret);
	    products.setRetailerIdFor(retailerIdFor); // Set the retailer ID
	    boolean result = prodService.addProduct(products);
	    if (result) {
	        return "Add Successfully";
	    }
	    return "Fail to Add Product";
	}
	
	@PostMapping("/addProducts")
	public String addProduct(@RequestBody Products products, @RequestParam("productImage")MultipartFile file) throws IOException
	{
		boolean result = prodService.addProduct(products, file);
		if(result)
			return "Add Successfully";
		return "Fail to Add Product";
	}
	
	
	@GetMapping("/getAllProducts")
	public List<Products> getAllProducts()
	{
		return prodService.getAllProducts();
	}
	
	
	@ResponseStatus(value = HttpStatus.OK)
	@PostMapping("/upload")
	public String uploadImage(@RequestParam("productImage")MultipartFile productImage, @RequestParam("productName") String productName,
							  @RequestParam("chemicalName") String chemicalName, @RequestParam("category") String category,
							  @RequestParam("companyName") String companyName, @RequestParam("weight") String weight,
							  @RequestParam("price") String price, @RequestParam("expiryDate") String expiryDate,
							  @RequestParam("quantity") String quantity, @RequestParam("shortDescription") String shortDescription,
							  @RequestParam("description") String description, @RequestParam("benefits") String benefits,
							  @RequestParam("targetedInsects") String targetedInsects, @RequestParam("RetailerIdFor") String RetailerIdFor
							  ) throws IOException{
		try {
            LocalDate localDate1 = LocalDate.parse(expiryDate);
        
				prodService.uploadImage(productImage, productName, chemicalName, category, companyName, weight , 
						Double.parseDouble(price), localDate1, Integer.parseInt(quantity), shortDescription, description, benefits,
						targetedInsects, Integer.parseInt(RetailerIdFor));
				return "Uploaded";
		} catch (DateTimeParseException e) {
            e.printStackTrace();
        }
		return "Uploaded";
	}
	
	@GetMapping("/getProduct")
	public Products getProductId(@RequestParam String productName, @RequestParam int id)
	{
		Products product = prodService.getProductByName(productName, id);
		return product;
	}
	
	@GetMapping("/getProductsByCategory")
	public List<Products> getProducts(@RequestParam String category)
	{
		List<Products> list = prodService.getProducts(category);
		if(list != null) {
			System.out.println(list);
			return list;	
		}
		return null;
	}
	
//	@GetMapping("/getProductsByDesc")
//	public List<Products> getProducts(@RequestParam String category, @RequestParam boolean b)
//	{
//		List<Products> list = prodService.getProductsByDesc(category, b);
//		if(list != null) {
//			System.out.println(list);
//			return list;	
//		}
//		return null;
//	}
	
	@GetMapping("/updateRating")
	public String updateStatus(@RequestParam int rating, @RequestParam int id)
	{
		boolean res = prodService.updateRating(rating, id);
		if(res)
			return "Update Succesfully";
		return "Something went wrong";
	}
	
	@GetMapping("/getProductsByRetailerId")
	public List<Products> getProductsByRetailer(@RequestParam int retailerId)
	{
		List<Products> list = prodService.getProductsByRetailerId(retailerId);
		if(list != null)
			return list;
		return null;
	}
	
	@GetMapping("/updateProduct")
	public String updateProd(@RequestParam double  price, @RequestParam int quantity, @RequestParam LocalDate expiryDate, @RequestParam int id)
	{
		prodService.updateProd(price, quantity, expiryDate, id);
		return "Update Succesfully";
	}
	
	@GetMapping("/getProductId")
	public int getProductId(@RequestParam String productname, @RequestParam String weight, @RequestParam double price)
	{
		int id = prodService.getProductId(productname, weight, price);
		return id;
	}
	
	@GetMapping("/deleteProduct")
	public String deleteProduct(@RequestParam int id)
	{
		
		boolean res = prodService.deleteProduct(id);
		if(res)
			return "Delete Succesfully";
		return "Something went wrong";
	}
	
	@GetMapping("/findProductForComparision")
	public Products getProductById(@RequestParam int id)
	{
		Products p = prodRepo1.findById(id);
		return p;
	}
}
