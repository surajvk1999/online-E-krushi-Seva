package com.cdac.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.entity.Retailer;

@Repository
public interface RetailerRepository extends JpaRepository<Retailer, Integer>
{
	
	public List<Retailer> findByStatus(String status);
	
	@Query("Update Retailer c set c.status=?1 where c.id=?2")
	@Transactional
	@Modifying
	public void updateByStatus(String status, int id);
	
	public Retailer findByUsernameAndPassword(String username,String password);
	
	public Retailer findById(int id);

	
	@Query("Update Retailer c set c.licenseExpiryDate=?1 where c.id=?2")
	@Transactional
	@Modifying
	public void updateByLicenseExpiryDate(LocalDate licenseExpiryDate, int id);
	
	
	
}

