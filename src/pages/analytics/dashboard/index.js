import React, { useEffect } from "react";
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import PieChart from "@/analyticsComponents/pieChart/pieChart";
import PaymentChart from "@/analyticsComponents/paymentChart/paymentChart";
import CustomerConversion from "@/analyticsComponents/customerConversion/customerConversion";
import CustomerChart from "@/analyticsComponents/customerChart/customerChart";
import CustomerinfoAlert from "@/analyticsComponents/customerinfoAlert/customerinfoAlert";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import {
  analyticsCustomerCount,
  analyticsCustomerLeadSourceCount,
  analyticsRevenueDetails,
} from "@/action/action";

export default function Analytics({ data: initialData }) {

import { analyticsCustomerCount, analyticsCustomerLeadSourceCount } from "@/action/action";

export default function Analytics({data: initialData}) {

  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status == "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  const getValues = Object.values(initialData.genderCount);
  const getKeys = Object.keys(initialData.genderCount).map((key) => {
    // Map each key to a new key name
    switch (key) {
      case "male_count":
        return "Male";
      case "female_count":
        return "Female";
      case "non_binary_count":
        return "Other";
      default:
        return key;
    }
  });



  const getColor = ["#1976D2", "#FF80FF", "#EAEAEA"];

  const label = [
    { id: 1, label: "Male", bgColor: "block_bg_blue_150" },
    { id: 2, label: "Female", bgColor: "block_bg_pink_100" },
    { id: 3, label: "Other", bgColor: "block_bg_gray_light_200" },
  ];



  return (
    <>
      <Header data={status === "authenticated" && data.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">

        <CustomerDetails />
        <section className="container-fluid">

        <CustomerDetails 
          initialCounts={initialData}
        />        
        <section className="container-fluid"> 

          <div className="db_customer_detail_wrap">
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12">
            <TotalCustomers chartData={initialData.chartData} /> 
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <PieChart
                  title="Total customers by gender"
                  getKeys={getKeys}
                  getValues={getValues}
                  getColor={getColor}
                  label={label}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <PaymentChart
                  totalRevenue={initialData.revenue}
                  title="Payment method"
                />
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
             <CustomerConversion />  
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div class="row">
              <div class="col-lg-9 col-md-7 col-sm-12">
               <CustomerChart chartData={initialData.chartData} />
              </div>
              <div class="col-lg-3 col-md-5 col-sm-12">
                <CustomerinfoAlert />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await analyticsCustomerCount();
    const customerJoinigData = await analyticsCustomerLeadSourceCount();

    // const customerRevenue = await analyticsRevenueDetails();

    return {
      props: {
        data: {
          genderCount: data.gender,
          // revenue: customerRevenue,
          chartData: customerJoinigData??[],


    return {
      props: {
        data:{
          contactedWithNoOffer: data.contacted_with_no_offer,
          deletedCustomers: data.deleted,
          joinedFromApp: customerJoinigData.filter((custData)=> custData.lead_source==="APP").length,
          joinedFromWeb: customerJoinigData.filter((custData)=> custData.lead_source!=="APP").length,
          noCompletedOffer: data.customer_no_offer_completed,
          notContacted: data.no_contacted,
          referralUsedCustomers: data.referral_used_customer,
          totalCustomers: data.total_count,
          voucherUserCustomers: data.voucher_used_customer,

        },
      },
    };
  } catch (error) {
    return {
      data: null,
    };
  }
}
