package com.etsmtl.ens.log210.livraison.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.util.Log;
import android.util.Pair;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.etsmtl.ens.log210.livraison.OrdersManager;
import com.etsmtl.ens.log210.livraison.R;
import com.etsmtl.ens.log210.livraison.activities.OrderDetailsActivity;

import java.util.ArrayList;

import it.gmariotti.cardslib.library.internal.Card;
import it.gmariotti.cardslib.library.internal.CardArrayAdapter;
import it.gmariotti.cardslib.library.internal.CardHeader;
import it.gmariotti.cardslib.library.view.CardListView;

/**
 * Created by vincentleclerc on 2014-05-26.
 */
public class FragmentOrders extends Fragment implements SwipeRefreshLayout.OnRefreshListener {

    // 0: full list
    // 1: my orders
    private int mTabNumber;
    private CardArrayAdapter mCardArrayAdapter;
    private ArrayList<Card> cards;
    private CardListView listView;

    private SwipeRefreshLayout swipeLayout;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // TODO Auto-generated method stub
        super.onCreate(savedInstanceState);

        // Initial setup to know which tab we're on.
        Bundle args = getArguments();
        mTabNumber = args.getInt("tab");
        Log.d("FragmentOrders", "onCreate: mTabNumber=" + mTabNumber);

        // CardUI setup.
        cards = new ArrayList<Card>();
        cardDataSetup();
        mCardArrayAdapter = new CardArrayAdapter(getActivity(), cards);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_orders,container, false);

        listView = (CardListView) view.findViewById(R.id.myList);

        if (listView != null) {
            listView.setAdapter(mCardArrayAdapter);
        }

        swipeLayout = (SwipeRefreshLayout) view.findViewById(R.id.swipe_container);
        swipeLayout.setOnRefreshListener(this);
        swipeLayout.setColorScheme(android.R.color.holo_blue_dark,
                android.R.color.holo_green_dark,
                android.R.color.holo_orange_dark,
                android.R.color.holo_red_dark);

        listView.setClickable(true);
        return view;
    }

    @Override
    public void onRefresh() {
        Log.d("FragmentOrders", "onRefresh: adapterCount=" + mCardArrayAdapter.getCount());
        mCardArrayAdapter.clear();
        cardDataSetup();
        mCardArrayAdapter.notifyDataSetChanged();
        swipeLayout.setRefreshing(false);
    }

    private void cardDataSetup() {
        cards.clear();

        for (int i = 0; i < OrdersManager.getCorrespondingOrdersList(mTabNumber).size(); i++) {
            // Create a Card
            CardHeader header = new CardHeader(getActivity());
            header.setTitle(OrdersManager.getCorrespondingOrdersList(mTabNumber).get(i).getID() + ", " + OrdersManager.getCorrespondingOrdersList(mTabNumber).get(i).getRestaurant());
            Card card = new Card(getActivity(), R.layout.row_list_card);
            String innerString = "";

            for (Pair<String, Integer> meal: OrdersManager.getCorrespondingOrdersList(mTabNumber).get(i).getMeals()) {
                innerString += ("\n" + meal.first + ", Qte: " + meal.second.toString());
            }

            final int finalI = i;
            card.setOnClickListener(new Card.OnCardClickListener() {
                @Override
                public void onClick(Card card, View view) {
                    if (mCardArrayAdapter != null) {
                        Bundle bundle = new Bundle();
                        bundle.putInt("tabNumber", mTabNumber);
                        bundle.putInt("orderNumber", finalI);

                        Intent intent = new Intent(getActivity().getBaseContext(), OrderDetailsActivity.class);
                        intent.putExtras(bundle);
                        startActivityForResult(intent, 101);
                    }
                }
            });

            card.setTitle(innerString);
            card.addCardHeader(header);

            cards.add(card);
        }
    }
}
