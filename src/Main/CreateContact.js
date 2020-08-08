import React from "react";
import { Form, Input, Button, Space, DatePicker, Select, Switch } from "antd";
import Context from "./Context";

const CreateContact = ({ onCancelClick }) => {
  const [form] = Form.useForm();
  const { addNewContact } = React.useContext(Context);
  const [birthday, setBirthday] = React.useState("");
  const { Option } = Select;
  const [isRelative, setIsRelative] = React.useState(false);
  const [isEmergency, setIsEmergency] = React.useState(false);

  const onFormFinish = (values) => {
    values.birthday = birthday
    values.isEmergency = isEmergency.toString()
    values.isRelative = isRelative.toString()
    addNewContact(values);
    onCancelClick();
  };

  const onDateChagne = (date, dateString) => {
    setBirthday(dateString)
  }

  const onEmergencyChange = () => {
    setIsEmergency(!isEmergency)
  }

  const onRelativeChange = () => {
    setIsRelative(!isRelative)
  }

  return (
    <Form form={form} onFinish={onFormFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input contact name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Birthday"
        rules={[
          {
            required: true,
            message: "Please pick a birthday date"
          },
        ]}  
      >
        <DatePicker format={'DD/MM/YYYY'} onChange={onDateChagne}/>
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true, 
            message: "Please pick a gender"
          }
        ]}
      >
        <Select>
          <Option value="male"> male </Option>
          <Option value="female"> female </Option>
          <Option value="other"> other </Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="isRelative"
        label="Is Relative Contact"
      >
        <Switch onChange={onRelativeChange} />
      </Form.Item>
      <Form.Item
        name="isEmergency"
        label="Is Emergency Contact"
      >
        <Switch onChange={onEmergencyChange} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Add Contact
          </Button>
          <Button type="primary" danger onClick={onCancelClick}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CreateContact;
