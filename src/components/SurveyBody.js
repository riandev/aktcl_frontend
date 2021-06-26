import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  console.log(dList);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const [q11, setQ11] = useState(null);

  const [pressSearch, setPressSearch] = useState(true);
  const [next, setNext] = useState(false);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://localhost:5001/dMatched/${searchNumber}`)
    .then(res => res.json())
    .then(data=>setConsumer(data))
    setPressSearch(false);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10value = (e) => {
    setQ10(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans8: q8,
      ans9: q9,
      ans10: q10,
      ans11: q11,
      agentID: agent,
    };
    fetch(`http://localhost:5001/answers/${consumer._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display:
            (next === true && "none") || pressSearch === false
              ? "block"
              : "none",
        }}
      >
        <h6>
          ১.আসসালামুআলাইকুম, আমি <b>{agent}</b> বলছি একটি সিগারেট জরীপ কোম্পানি
          থেকে। আপনি কি <b>{consumer?.r_name}</b> স্যার বলছেন?
        </h6>
        <Form.Group onChange={q1value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>২.স্যার, আপনি কি ধুমপান করেন?</h6>
        <Form.Group onChange={q2value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৩.আপনি বর্তমানে কোন ব্র্যান্ডের সিগারেট ধূমপান করেন?</h6>
        <Form.Group onChange={q3value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="মেরিস"
              value="marise"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="ডার্বি"
              value="derby"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="পাইলট"
              value="pilot"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="হলিউড"
              value="hollywood"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="শেখ"
              value="sheikh"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="রয়েলস"
              value="royals"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="অন্যান্য"
              value="others"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{
          display: q3 === null ? "none" : "block",
        }}
        className="mt-2"
      >
        <h6>৪.কত দিন যাবত মেরিস ধূমপান করছেন?</h6>
        <Form.Group onChange={q4value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="০দিন"
              value="0days"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="১দিন"
              value="1days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="২দিন"
              value="2days"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="৩দিন"
              value="3days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৪দিন"
              value="4days"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="৫দিন"
              value="5days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৬দিন"
              value="6days"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="৭দিন"
              value="7days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৮দিন"
              value="8days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৯দিন"
              value="9days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১০দিন"
              value="10days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১১দিন"
              value="11days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১২দিন"
              value="12days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১৩দিন"
              value="13days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১৪দিন"
              value="14days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১৫দিন"
              value="15days"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৩সপ্তাহ"
              value="3week"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১মাস"
              value="1month"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="২মাস"
              value="2month"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৩মাস"
              value="3month"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৪মাস"
              value="4month"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৫মাস"
              value="5month"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="৬মাস"
              value="6month"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১বছর"
              value="1year"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="১বছরের বেশি"
              value="1yearplus"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div style={{ display: q4 === null ? "none" : "block" }} className="mt-2">
        <h6>৫.এর আগে কোন ব্র্যান্ডের সিগারেট ধূমপান করতেন?</h6>
        <Form.Group onChange={q5value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="মেরিস"
              value="marise"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="ডার্বি"
              value="derby"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="পাইলট"
              value="pilot"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="হলিউড"
              value="hollywood"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="শেখ"
              value="sheikh"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="রয়েলস"
              value="royals"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="অন্যান্য"
              value="others"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div style={{ display: q5 === null ? "none" : "block" }} className="mt-2">
        <h6>
          ৬.গত ৭ দিনের মধ্য কোন সিগারেট কোম্পানির প্রতিনিধি কি আপনার কাছে
          এসেছিল? <b>({consumer?.data_date})</b>
        </h6>
        <Form.Group onChange={q6value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="হ্যাঁ"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="না"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৭.কোন কোম্পানি থেকে এসেছিল?</h6>
        <Form.Group onChange={q7value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="মেরিস"
              value="marise"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="অন্যান্য"
              value="others"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div style={{display:q3==='marise'&& q7==='marise'?'block':'none'}} className="mt-2">
        <h6>
          ৮.স্যার, আপনি কি আমাদের প্রতিনিধি দেখা করার পর থেকে মেরিস সিগারেট
          ধূমপান করছেন?
        </h6>
        <Form.Group onChange={q8value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="হ্যাঁ"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="না"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      <div>
        <div style={{display:q8===null? "none" : "block"}} className="mt-2">
          <h6>৯.আপনাকে কি কোন সিগারেট দিয়েছিল টেস্ট করার জন্য?</h6>
          <Form.Group onChange={q9value} as={Row}>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="হ্যাঁ"
                value="yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="না"
                value="no"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </div>
      </div>
      <div style={{display:q9==='yes' ? 'block':'none'}} className="mt-2">
        <h6>
          ১০.স্যার, আপনি তখন কত (প্যাকেট সংখ্যা ডাটাবেজ থেকে আসবে এবং দেখাবে)
          প্যাকেট মেরিস সিগারেট কিনেছিলেন?
        </h6>
        <Form.Group onChange={q10value} as={Row}>
          <Col sm={10}>
              <Form.Check
                type="radio"
                label="০প্যাকেট"
                value="0packet"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="১প্যাকেট"
                value="1packet"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="২প্যাকেট"
                value="2packet"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="৩প্যাকেট"
                value="3packet"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="৪প্যাকেট"
                value="4packet"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="৫প্যাকেট"
                value="5packet"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="প্যাকেট সেলস+সোয়াপিং"
                value="packet_sales+swaping"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="সোয়াপিং"
                value="swaping"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="অন্যান্য"
                value="others"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
          </Col>
        </Form.Group>
      </div>
      <div style={{ display: q10 === null ? "none" : "block" }} className="mt-2">
        <h6>১১. স্যার, আপনাকে কি সিগারেট এর সাথে চা-নাস্তা পান করিয়েছে?</h6>
        <Form.Group onChange={q11value} as={Row}>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="হ্যাঁ"
              value="yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="না"
              value="no"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display: q1 === "no" || q2 === "no"|| q6=='no'||q7==='others'||q11==='yes'||q11==='no' ? "block" : "none",
        }}
        className="mt-3"
      >
        <h5>
          আপনার প্রিয় ব্র্যান্ড মেরিস এখনও ৪ টাকা শলাকা একই উন্নত স্বাদে। মেরিসে
          এর সাথে থাকার জন্য আপনাকে ধন্যবাদ।
        </h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
