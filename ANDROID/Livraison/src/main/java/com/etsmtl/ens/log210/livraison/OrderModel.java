package com.etsmtl.ens.log210.livraison;

import android.location.Address;
import android.util.Pair;

import java.util.ArrayList;

/**
 * Created by vincentleclerc on 2014-05-27.
 */
public class OrderModel {

    public static int mCount = 0;

    private int mID;
    private String mRestaurantName;
    private ArrayList<Pair<String, Integer>> mMeals;
    private Address mAddress;

    public OrderModel() {}

    public OrderModel (int ID, String restaurantName, ArrayList<Pair<String, Integer>> meals, Address address) {
        mID = ID;
        mRestaurantName = restaurantName;
        mMeals = meals;
        mAddress = address;
    }

    public int getID() {
        return mID;
    }

    public void setID(int mID) {
        this.mID = mID;
    }

    public String getRestaurant() {
        return mRestaurantName;
    }

    public void setRestaurant(String mRestaurantName) {
        this.mRestaurantName = mRestaurantName;
    }

    public ArrayList<Pair<String, Integer>> getMeals() {
        return mMeals;
    }

    public void setMeals(ArrayList<Pair<String, Integer>> mMeals) {
        this.mMeals = mMeals;
    }

    public Address getAddress() {
        return mAddress;
    }

    public void setAddress(Address mAddress) {
        this.mAddress = mAddress;
    }
}
