package com.etsmtl.ens.log210.livraison.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.view.ViewPager;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;

import com.etsmtl.ens.log210.livraison.R;
import com.etsmtl.ens.log210.livraison.fragments.FragmentOrders;


public class DeliveryActivity extends ActionBarActivity {

    private static ViewPager mViewPager;
    OrdersCollectionPagerAdapter mOrdersCollectionPagerAdapter;

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_delivery);
        mOrdersCollectionPagerAdapter = new OrdersCollectionPagerAdapter(getSupportFragmentManager());
        mViewPager = (ViewPager) findViewById(R.id.pager);
        mViewPager.setAdapter(mOrdersCollectionPagerAdapter);


        // setup action bar for tabs
        ActionBar actionBar = getSupportActionBar();
        actionBar.setNavigationMode(ActionBar.NAVIGATION_MODE_TABS);
        actionBar.setTitle(getResources().getString(R.string.orders_title));

        ActionBar.Tab tab = actionBar.newTab()
                .setText(R.string.tab_full)
                .setTabListener(new TabListener());
        actionBar.addTab(tab);

        tab = actionBar.newTab()
                .setText(R.string.tab_assigned)
                .setTabListener(new TabListener());
        actionBar.addTab(tab);

        // Used to handle swipe navigation between tabs.
        mViewPager.setOnPageChangeListener(
                new ViewPager.SimpleOnPageChangeListener() {
                    @Override
                    public void onPageSelected(int position) {
                        // When swiping between pages, select the
                        // corresponding tab.
                        getSupportActionBar().setSelectedNavigationItem(position);
                    }
                });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.

        Log.d("DeliveryActivity", "onOptionsItemSelected");
        int id = item.getItemId();
        if (id == R.id.action_logout) {
            Intent intent = new Intent(this, LoginActivity.class);
            startActivity(intent);
            finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    public class OrdersCollectionPagerAdapter extends FragmentStatePagerAdapter {
        public OrdersCollectionPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public FragmentOrders getItem(int i) {
            FragmentOrders fragment = new FragmentOrders();
            Bundle args = new Bundle();
            args.putInt("tab", i);
            fragment.setArguments(args);

            return fragment;
        }

        @Override
        public int getCount() {
            return 2;
        }
    }

    public static class TabListener implements ActionBar.TabListener {
        public void onTabSelected(ActionBar.Tab tab, FragmentTransaction ft) {
            mViewPager.setCurrentItem(tab.getPosition());
        }

        public void onTabUnselected(ActionBar.Tab tab, FragmentTransaction ft) {}

        public void onTabReselected(ActionBar.Tab tab, FragmentTransaction ft) {}
    }
}
