package com.etsmtl.ens.log210.livraison.fragments;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

import com.etsmtl.ens.log210.livraison.R;
import com.etsmtl.ens.log210.livraison.activities.DeliveryActivity;

/**
 * Created by vincentleclerc on 2014-05-23.
 */
public class FragmentLogin extends Fragment {

    EditText mUsername;
    EditText mPassword;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.d("FragmentLogin", "onCreate");
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
    }

    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        Log.d("FragmentLogin", "onCreateOptionsMenu");
        super.onCreateOptionsMenu(menu,inflater);
        MenuItem item = menu.findItem(R.id.action_logout);
        item.setVisible(false);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,Bundle savedInstanceState) {
        Log.d("FragmentLogin", "onCreateView");
        View view = inflater.inflate(R.layout.fragment_login,container, false);
        mUsername = (EditText) view.findViewById(R.id.ET_username);
        mPassword = (EditText) view.findViewById(R.id.ET_password);

        view.findViewById(R.id.BTN_login).setOnClickListener(mGlobal_OnClickListener);
        return view;
    }

    final View.OnClickListener mGlobal_OnClickListener = new View.OnClickListener() {
        public void onClick(final View v) {
            Log.d("FragmentLogin", "mGlobal_OnClickListener");
            switch (v.getId()) {
                case R.id.BTN_login:
                    if(mPassword.getText().length() == 0 || mUsername.getText().length() == 0) {
                        loginFailedDialog();
                    } else {
                        openDeliveryActivity();
                    }

                break;
            }
        }
    };

    private void openDeliveryActivity() {
        Log.d("FragmentLogin", "openDeliveryActivity");
        Intent intent = new Intent(getActivity(), DeliveryActivity.class);
        startActivity(intent);
        getActivity().finish();
    }

    private void loginFailedDialog() {
        // 1. Instantiate an AlertDialog.Builder with its constructor
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());

        // 2. Chain together various setter methods to set the dialog characteristics
        builder.setMessage(R.string.dialog_message)
                .setTitle(R.string.dialog_title);

        builder.setPositiveButton(R.string.ok, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                // User clicked OK button
            }
        });

        // 3. Get the AlertDialog from create()
        AlertDialog dialog = builder.create();
        dialog.show();
    }
}
