package com.cdac.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.entity.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Integer>{
	
	public List<Products> findAll();
	
	public Products findById(int id);
	
	@Query("SELECT p FROM Products p WHERE p.productName = :productName AND p.id = :id")
	public Products findByproductNameAndId(@Param("productName") String productName,@Param("id")  int id);
	
	
	public List<Products> findByCategory(String category);
	
	@Query("Select pr From Products pr Where pr.chemicalName = :chemicalName Order By pr.price")
	public List<Products> findByChemicalName(@Param("chemicalName") String chemicalName);
	
	@Query("Select pr From Products pr Where pr.companyName =?1 Order By pr.price")
	public List<Products> findByCompanyName(String companyName);
	
	@Query("Select pr From Products pr Where pr.productName = :productName Order By pr.price")
	public List<Products> findByProductName(@Param("productName") String productName);
	
	
	@Query("Update Products p set p.rating=?1 where p.id=?2")
	@Transactional
	@Modifying
	public void updateByRating(int rating, int id);
	
	@Query("select p From Products p where p.RetailerIdFor=?1")
	public List<Products> findRetailerProducts(int retailerId);
	
	@Query("Update Products p set p.price=?1, p.quantity=?2, p.expiryDate=?3 where p.id=?4")
	@Transactional
	@Modifying
	public void updateProduct(double price, int quantity, LocalDate expiryDate, int id);
	
	
	@Query("Select p From Products p Where p.productName=?1 And p.weight=?2 And p.price=?3")
	public Products findByProductNameAndWeightAndPrice(String productname, String weight, double price);
}
