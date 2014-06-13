package com.etsmtl.ens.log210.livraison.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.etsmtl.ens.log210.livraison.OrderModel;
import com.etsmtl.ens.log210.livraison.OrdersManager;
import com.etsmtl.ens.log210.livraison.R;

import it.gmariotti.cardslib.library.internal.Card;
import it.gmariotti.cardslib.library.internal.CardHeader;
import it.gmariotti.cardslib.library.view.CardView;

/**
 * Created by vincentleclerc on 2014-05-26.
 */
public class FragmentOrderDetails extends Fragment {

    private OrderModel order;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.d("FragmentOrderDetails", "onCreate");
        super.onCreate(savedInstanceState);

        // Fetches the right order details.

        Intent intent = getActivity().getIntent();
        int tabNumber = intent.getIntExtra("tabNumber", -1);
        int orderNumber = intent.getIntExtra("orderNumber", -1);

        order = OrdersManager.getCorrespondingOrdersList(tabNumber).get(orderNumber);

        // Setup the ActionBar.

        ((ActionBarActivity) getActivity()).getSupportActionBar().setNavigationMode(ActionBar.NAVIGATION_MODE_STANDARD);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,Bundle savedInstanceState) {
        Log.d("FragmentOrderDetails", "onCreateView");
        View view = inflater.inflate(R.layout.fragment_order_details,container, false);

        CardView cardView = (CardView) view.findViewById(R.id.card_details);

        //Create a Card
        Card card = new Card(getActivity(), R.layout.details_order_card);

        //Create a CardHeader
        CardHeader header = new CardHeader(getActivity());
        header.setTitle(Integer.toString(order.getID()) + ", " + order.getRestaurant());
        //Add Header to card
        card.addCardHeader(header);
        cardView.setCard(card);

        // setup the views with the data.

        //view.findViewById(R.id.BTN_login).setOnClickListener(mGlobal_OnClickListener);
        return view;
    }
}
