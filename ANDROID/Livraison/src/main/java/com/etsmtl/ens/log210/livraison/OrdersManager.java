package com.etsmtl.ens.log210.livraison;

import android.location.Address;
import android.util.Pair;

import java.util.ArrayList;
import java.util.Locale;

/**
 * Created by vincentleclerc on 2014-05-27.
 */
public class OrdersManager {
    private static OrdersManager mInstance = null;

    public static ArrayList<OrderModel> getMyOrders() {
        return mMyOrders;
    }

    public static void setMyOrders(ArrayList<OrderModel> MyOrders) {
        OrdersManager.mMyOrders = MyOrders;
    }

    public static ArrayList<OrderModel> getFullOrders() {
        return mFullOrders;
    }

    public static void setFullOrders(ArrayList<OrderModel> FullOrders) {
        OrdersManager.mFullOrders = FullOrders;
    }

    private static ArrayList<OrderModel> mMyOrders;
    private static ArrayList<OrderModel> mFullOrders;

    protected OrdersManager() {
        // Exists only to defeat instantiation.
    }
    public static OrdersManager getInstance() {
        if(mInstance == null) {
            mMyOrders = new ArrayList<OrderModel>();
            mFullOrders = new ArrayList<OrderModel>();

            // TODO: To be deleted.
            for(int i = 0; i < 3; ++i)
                mMyOrders.add(createTestOrder());
            for(int i = 0; i < 5; ++i)
                mFullOrders.add(createTestOrder());
            ////////

            mInstance = new OrdersManager();
        }

        return mInstance;
    }

    public static OrderModel createTestOrder() {
        String restaurantName = "Georgio";
        int ID = 241 + OrderModel.mCount;
        ArrayList<Pair<String, Integer>> meals = new ArrayList<Pair<String, Integer>>();
        Address address = new Address(Locale.getDefault());

        meals.add(new Pair<String, Integer>("Poulet de roi", 2));
        meals.add(new Pair<String, Integer>("Pizza de chef", 1));
        meals.add(new Pair<String, Integer>("Patate de luxe", 6));

        address.setAddressLine(1, "82 De la Charente");
        address.setPostalCode("J7C4M4");
        address.setCountryName("Canada");

        ++ OrderModel.mCount;
        return new OrderModel(ID, restaurantName, meals, address);
    }

    public static ArrayList<OrderModel> getCorrespondingOrdersList(int tabNumber) {
        return tabNumber == 0 ? getInstance().getFullOrders() : getInstance().getMyOrders();
    }
}
