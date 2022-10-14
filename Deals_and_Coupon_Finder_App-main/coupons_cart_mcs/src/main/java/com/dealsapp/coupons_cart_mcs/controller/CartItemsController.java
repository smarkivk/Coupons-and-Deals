package com.dealsapp.coupons_cart_mcs.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dealsapp.coupons_cart_mcs.entity.CartItems;
import com.dealsapp.coupons_cart_mcs.service.CartItemsService;
import com.dealsapp.coupons_cart_mcs.wrapper.FinalList;

/**
 * This is the controller of Coupons Cart Microservice
 * @author Prashant Kumar Singh
 *
 * 
 * @CreatedOn 30/08/2022
 * @UpdatedOn 01/09/2022
 *
 */

@RestController
@RequestMapping("/cartItems")
public class CartItemsController {
	
	
	@Autowired
	private CartItemsService cartItemsService;

	/**
	 * This is a Post Mapping Method Used to add all the Items in cart
	 * @param cartItems The Item to be added
	 * @return the success message
	 * @CreatedOn 30/08/2022
	 * @UpdatedOn 01/09/2022
	 */
	@PostMapping("/addorder")
	public String addNeworder( @RequestBody CartItems cartItems ){
			return cartItemsService.addorder( cartItems );		
	}
	
	/**
	 * This is Get Mapping Method to get the list of all the items from the cart
	 * @return List of all the items in the cart.
	 * @CreatedOn 30/08/2022
	 * @UpdatedOn 01/09/2022
	 */
	@GetMapping("/allOrders")
	public List<FinalList> fetchAllProducts(){
		return  cartItemsService.fetchAllOrders();
	}
	
	/**
	 * This is the Put method used to update an existing cart items.
	 * @param finalList takes the input in following format
	 * @return the updated list
	 * @CreatedOn 30/08/2022
	 * @UpdatedOn 01/09/2022
	 */
	@PutMapping("/updateProduct")
	public FinalList updateProduct(@RequestBody  FinalList finalList) {

		return  cartItemsService.update(finalList);
	}

	/**
	 * This is the delete method used to delete the product according to the provided id.
	 * @param id takes id as parameter
	 * @return Success message or an exception
	 * @CreatedOn 30/08/2022
	 * @UpdatedOn 01/09/2022
	 */
	@DeleteMapping("/deleteProduct/{id}")
	 public String deleteProductById(@PathVariable("id") String id)
	 {
		cartItemsService.deleteById(id);
		return "id no "+id+" is deleted";
	 }
	/**
	 * This method will return the list of cart items sorted according to the price
	 * @param sortBy The parameter according to which it is to be sorted
	 * @param pageNo
	 * @param pageSize
	 * @return the sorted list
	 * @CreatedOn 30/08/2022
	 * @UpdatedOn 01/09/2022
	 */
	@GetMapping("/allOrders/ByPrice")
	public Map<String, Object> getAllOrderByPrice(@RequestParam(name = "sortby", defaultValue ="coupons_price")String sortBy,
			@RequestParam(name = "pageno", defaultValue = "0") int pageNo,@RequestParam(name = "pagesize", defaultValue = "4") int pageSize){
		return  cartItemsService.getAllOrderByPrice(pageNo,pageSize,sortBy);
	}
	/**
	 * This will add the coupons in WishList. Also it deletes that coupon from Cart.
	 * @param id Coupon id that to be added
	 * @return Success message
	 *  @CreatedOn 04/09/2022
	 * @UpdatedOn 04/09/2022
	 */
	@PostMapping("/addWishlist/{coupons_id}")
	public String addNeworder( @PathVariable("coupons_id") String coupons_id){
			return cartItemsService.addWishlist(coupons_id );
	}
}
	
	


