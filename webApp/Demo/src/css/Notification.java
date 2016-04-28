/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package com.soufun.agent.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Vibrator;

import com.soufun.agent.fenbao.Utils;

/**
 * shijinpeng
 * 此插件主要是配合前端调用原生对话框
 */
public class Notification extends CordovaPlugin {
    public Dialog spinnerDialog = null;

    /**
     *
     * @param action          The action to execute. 控制弹出和隐藏的对话框
     * @param args            The exec() arguments.  message
     * @param callbackContext The callback context used when calling back into JavaScript.
     * @return
     * @throws JSONException
     */
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if(action.equals("activityStart"))
        {
            this.activityStart(args.getString(0), args.getString(1));
            return true;
        }
        else if (action.equals("activityStop")) {
            this.activityStop();
            return  true;
        }else if(action.equals("toast")){
            Utils.toast(cordova.getActivity(),args.getString(0));
            return true;
        }
        else
        {
            return false;
        }
    }

    public synchronized void activityStart(final String title, final String message) {
        if (this.spinnerDialog != null) {
            this.spinnerDialog.dismiss();
            this.spinnerDialog = null;
        }
        final Notification notification = this;
        final CordovaInterface cordova = this.cordova;
        Runnable runnable = new Runnable() {
            public void run() {
                notification.spinnerDialog = ProgressDialog.show(cordova.getActivity(), title, message, true, true,
                        new DialogInterface.OnCancelListener() {
                            public void onCancel(DialogInterface dialog) {
                                notification.spinnerDialog = null;
                            }
                        });
            }
        };
        this.cordova.getActivity().runOnUiThread(runnable);
    }
    public synchronized void activityStop() {
        if (this.spinnerDialog != null) {
            this.spinnerDialog.dismiss();
            this.spinnerDialog = null;
        }
    }

}
