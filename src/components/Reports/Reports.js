import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [dStatus,setDstatus]=useState(false);
  useEffect(() => {
    fetch("http://192.168.1.11:5001/reports")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReport(data);
      });
  }, []);
  const handleDelete=() =>{
    fetch("http://192.168.1.11:5001/deleteAll",{
      method: "DELETE",
      headers: {'Content-type':'application/json'}
    })
    .then(res => res.json())
    .then((data) => setDstatus(data));
  }
  let headers = [
    { label: "Id", key: "Id" },
    { label: "diid", key: "diid" },
    { label: "data_status", key: "data_status" },
    { label: "data_date", key: "data_date" },
    { label: "ACTIVITY_ID", key: "ACTIVITY_ID" },
    { label: "TERITORY_NAME", key: "TERITORY_NAME" },
    { label: "ZONE_NAME", key: "ZONE_NAME" },
    { label: "ROUTE_NAME", key: "ROUTE_NAME" },
    { label: "TEAM_ID", key: "TEAM_ID" },
    { label: "TEAM_NAME", key: "TEAM_NAME" },
    { label: "TM_USER_NAME", key: "TM_USER_NAME" },
    { label: "TM_NAME", key: "TM_NAME" },
    { label: "OUTLET_NAME", key: "OUTLET_NAME" },
    { label: "r_name", key: "r_name" },
    { label: "Consumer_No", key: "Consumer_No" },
    { label: "USING_BRAND", key: "USING_BRAND" },
    { label: "OFFERED_BRAND", key: "OFFERED_BRAND" },
    { label: "SAMPLING_NO", key: "SAMPLING_NO" },
    { label: "SWAPPING_NO", key: "SWAPPING_NO" },
    { label: "no_of_pack", key: "no_of_pack" },
    { label: "SALES_PACK_QTY", key: "SALES_PACK_QTY" },
    { label: "ENTERTAINMENT_NO", key: "ENTERTAINMENT_NO" },
    { label: "GIFT_QTY", key: "GIFT_QTY" },
    { label: "ADD_DATE_TIME", key: "ADD_DATE_TIME" },
    { label: "for_d", key: "for_d" },
    { label: "agentID", key: "agentID" },
    { label: "q1", key: "answer1" },
    { label: "q2", key: "answer2" },
    { label: "q3", key: "answer3" },
    { label: "q4", key: "answer4" },
    { label: "q5", key: "answer5" },
    { label: "q6", key: "answer6" },
    { label: "q7", key: "answer7" },
    { label: "q8", key: "answer8" },
    { label: "q9", key: "answer9" },
    { label: "q10", key: "answer10" },
    { label: "q11", key: "answer11" },
  ];
  return (
    <div className="text-center mt-5">
      <div>
        <h4>Download Report</h4>
      </div>
      <div style={{ display: report.length > 0 ? "block" : "none" }}>
        <button className="btn btn-danger">
        <CSVLink
          headers={headers}
          title="Export data to CSV"
          filename={"AKTCL_EAS.csv"}
          data={report}
        >
          Download
        </CSVLink>
        </button>
      </div>
      <div className="mt-5 text-center">
      <p style={{color: 'red'}}>Bhai jokhn uploaded Leads sob delete korben tokhn ete te press korben</p>
        <button className="btn btn-danger"onClick={handleDelete}>Delete All Data</button>
      </div>
    </div>
  );
};

export default Reports;
