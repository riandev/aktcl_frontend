import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

const FinalUpdateQc = ({ ansData }) => {
  console.log(ansData);
  const [status, setStatus] = useState(false);
  const id = ansData._id;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://192.168.1.11:5001/finalUpdate/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((output) => {
        console.log(output);
        setStatus(output);
      });
    // window.location.reload(false);
  };

  return (
    <div>
      <h3>Update Survey:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity1">
            <Form.Label>
              <b>Question 1</b>
            </Form.Label>
            <Form.Control
              {...register("answer1")}
              as="select"
              defaultValue={ansData.answer1}
            >
              <option>...</option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity2">
            <Form.Label>
              <b>Question 2</b>
            </Form.Label>
            <Form.Control
              {...register("answer2")}
              as="select"
              defaultValue={ansData.answer2}
            >
              <option>...</option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity3">
            <Form.Label>
              <b>Question 3</b>
            </Form.Label>
            <Form.Control
              {...register("answer3")}
              as="select"
              defaultValue={ansData.answer3}
            >
              <option>...</option>
              <option>marise</option>
              <option>derby</option>
              <option>pilot</option>
              <option>hollywood</option>
              <option>sheikh</option>
              <option>royals</option>
              <option>others</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity4">
            <Form.Label>
              <b>Question 4</b>
            </Form.Label>
            <Form.Control
              {...register("answer4")}
              as="select"
              defaultValue={ansData.answer4}
            >
              <option>...</option>
              <option>0days</option>
              <option>1days</option>
              <option>2days</option>
              <option>3days</option>
              <option>4days</option>
              <option>5days</option>
              <option>6days</option>
              <option>7days</option>
              <option>8days</option>
              <option>9days</option>
              <option>10days</option>
              <option>11days</option>
              <option>12days</option>
              <option>13days</option>
              <option>14days</option>
              <option>15days</option>
              <option>3week</option>
              <option>1month</option>
              <option>2month</option>
              <option>3month</option>
              <option>4month</option>
              <option>5month</option>
              <option>6month</option>
              <option>1year</option>
              <option>1yearplus</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity5">
            <Form.Label>
              <b>Question 5</b>
            </Form.Label>
            <Form.Control
              {...register("answer5")}
              as="select"
              defaultValue={ansData.answer5}
            >
              <option>...</option>
              <option>marise</option>
              <option>derby</option>
              <option>pilot</option>
              <option>hollywood</option>
              <option>sheikh</option>
              <option>royals</option>
              <option>others</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity6">
            <Form.Label>
              <b>Question 6</b>
            </Form.Label>
            <Form.Control
              {...register("answer6")}
              as="select"
              defaultValue={ansData.answer6}
            >
              <option>...</option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity7">
            <Form.Label>
              <b>Question 7</b>
            </Form.Label>
            <Form.Control
              {...register("answer7")}
              as="select"
              defaultValue={ansData.answer7}
            >
              <option>...</option>
              <option>marise</option>
              <option>others</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity8">
            <Form.Label>
              <b>Question 8</b>
            </Form.Label>
            <Form.Control
              {...register("answer8")}
              as="select"
              defaultValue={ansData.answer8}
            >
              <option>...</option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity9">
            <Form.Label>
              <b>Question 9</b>
            </Form.Label>
            <Form.Control
              {...register("answer9")}
              as="select"
              defaultValue={ansData.answer9}
            >
              <option>...</option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity10">
            <Form.Label>
              <b>Question 10</b>
            </Form.Label>
            <Form.Control
              {...register("answer10")}
              as="select"
              defaultValue={ansData.answer10}
            >
              <option>...</option>
              <option>0packet</option>
              <option>1packet</option>
              <option>2packet</option>
              <option>3packet</option>
              <option>4packet</option>
              <option>5packet</option>
              <option>packet_sales+swaping</option>
              <option>swaping</option>
              <option>others</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity11">
            <Form.Label>
              <b>Question 11</b>
            </Form.Label>
            <Form.Control
              {...register("answer11")}
              as="select"
              defaultValue={ansData.answer11}
            >
              <option>...</option>
              <option>yes</option>
              <option>no</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <input className="btn btn-danger" type="submit" />
      </form>
      <div>{status === true && alert("Data Updated Successfully")}</div>
    </div>
  );
};

export default FinalUpdateQc;
