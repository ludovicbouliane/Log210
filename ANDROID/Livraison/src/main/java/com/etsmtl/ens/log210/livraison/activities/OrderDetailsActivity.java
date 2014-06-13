package com.etsmtl.ens.log210.livraison.activities;

import android.os.Bundle;
import android.support.v4.app.NavUtils;
import android.support.v7.app.ActionBarActivity;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

import com.etsmtl.ens.log210.livraison.R;

/**
 * Created by vincentleclerc on 2014-05-27.
 */
public class OrderDetailsActivity extends ActionBarActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_order_details);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setTitle(getResources().getString(R.string.orders_details_title));

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                NavUtils.navigateUpFromSameTask(this);
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu items for use in the action bar
        if(getIntent().getIntExtra("tabNumber", -1) == 0) {
            MenuInflater inflater = getMenuInflater();
            inflater.inflate(R.menu.details_actions, menu);
        }
        return super.onCreateOptionsMenu(menu);
    }
}
