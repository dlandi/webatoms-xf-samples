﻿using System;

using Android.App;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace WebAtomsDemo.Droid
{
    [Activity(Label = "WebAtomsDemo", Icon = "@mipmap/icon", Theme = "@style/WebAtomsAppTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
    public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsAppCompatActivity
    {
        public override void OnBackPressed()
        {
            if (!Rg.Plugins.Popup.Popup.SendBackPressed(base.OnBackPressed))
            {
                base.OnBackPressed();
            }
        }

        protected override void OnCreate(Bundle bundle)
        {

            base.OnCreate(bundle);


            Rg.Plugins.Popup.Popup.Init(this, bundle);

            global::Xamarin.Forms.Forms.Init(this, bundle);
            // TabLayoutResource = Resource.Layout.Tabbar;
            ToolbarResource = Resource.Layout.Toolbar;
            try
            {
                LoadApplication(new App());
            }
            catch (Exception ex) {
                throw;
            }
        }
    }
}

