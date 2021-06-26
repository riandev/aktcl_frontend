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
    fetch(`http://192.168.1.11:5001/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setPressSearch(false);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
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
    console.log(e.target.value);
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
    fetch(`http://192.168.1.11:5001/answers/${consumer._id}`, {
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
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="marise">মেরিস</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="sheikh">শেখ</option>
            <option value="royals">রয়েলস</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "marise" ||
            q3 === "derby" ||
            q3 === "pilot" ||
            q3 === "hollywood" ||
            q3 === "sheikh" ||
            q3 === "royals" ||
            q3 === "others"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৪.কত দিন যাবত মেরিস ধূমপান করছেন?</h6>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="0days">০দিন</option>
            <option value="1days">১দিন</option>
            <option value="2days">২দিন</option>
            <option value="3days">৩দিন</option>
            <option value="4days">৪দিন</option>
            <option value="5days">৫দিন</option>
            <option value="6days">৬দিন</option>
            <option value="7days">৭দিন</option>
            <option value="8days">৮দিন</option>
            <option value="9days">৯দিন</option>
            <option value="10days">১০দিন</option>
            <option value="11days">১১দিন</option>
            <option value="12days">১২দিন</option>
            <option value="13days">১৩দিন</option>
            <option value="14days">১৪দিন</option>
            <option value="15days">১৫দিন</option>
            <option value="3week">৩সপ্তাহ</option>
            <option value="1month">১মাস</option>
            <option value="2month">২মাস</option>
            <option value="3month">৩মাস</option>
            <option value="4month">৪মাস</option>
            <option value="5month">৫মাস</option>
            <option value="6month">৬মাস</option>
            <option value="1year">১বছর</option>
            <option value="1yearplus">১বছরের বেশি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q4 === "0days" ||
            q4 === "1days" ||
            q4 === "2days" ||
            q4 === "3days" ||
            q4 === "4days" ||
            q4 === "5days" ||
            q4 === "6days" ||
            q4 === "7days" ||
            q4 === "8days" ||
            q4 === "9days" ||
            q4 === "10days" ||
            q4 === "11days" ||
            q4 === "12days" ||
            q4 === "13days" ||
            q4 === "14days" ||
            q4 === "15days" ||
            q4 === "3week" ||
            q4 === "1month" ||
            q4 === "2month" ||
            q4 === "3month" ||
            q4 === "4month" ||
            q4 === "5month" ||
            q4 === "6month" ||
            q4 === "1year" ||
            q4 === "1yearplus"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৫.এর আগে কোন ব্র্যান্ডের সিগারেট ধূমপান করতেন?</h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="marise">মেরিস</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="sheikh">শেখ</option>
            <option value="royals">রয়েলস</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
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
      <div
        style={{
          display: q3 === "marise" && q7 === "marise" ? "block" : "none",
        }}
        className="mt-2"
      >
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
        <div
          style={{
            display: ((q3==='derby'||q3==='pilot'||q3==='hollywood'||q3==='sheikh'||q3==='royals'||q3==='others')&&(q7==='marise'?'block':'none'))||(q8==='yes'||q8==='no'?'block':'none')}}
          className="mt-2"
        >
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
      <div
        style={{ display: q9 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ১০.স্যার, আপনি তখন কত (প্যাকেট সংখ্যা ডাটাবেজ থেকে আসবে এবং দেখাবে)
          প্যাকেট মেরিস সিগারেট কিনেছিলেন?
        </h6>
        <Form.Group onChange={q10value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option value="0packet">...</option>
            <option value="0packet">০প্যাকেট</option>
            <option value="1packet">১প্যাকেট</option>
            <option value="2packet">২প্যাকেট</option>
            <option value="3packet">৩প্যাকেট</option>
            <option value="4packet">৪প্যাকেট</option>
            <option value="5packet">৫প্যাকেট</option>
            <option value="packet_sales+swaping">প্যাকেট সেলস+সোয়াপিং</option>
            <option value="swaping">সোয়াপিং</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q10 === null ? "none" : "block" }}
        className="mt-2"
      >
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
          display:
            q1 === "no" ||
            q2 === "no" ||
            q6 == "no" ||
            q7 === "others" ||
            q11 === "yes" ||
            q11 === "no"
              ? "block"
              : "none",
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
