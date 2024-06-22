import React, { useContext } from "react";
import { Button, Form, Select } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined,
} from "../assets/icons";
import { Option } from "antd/es/mentions";
import Input from "../components/Input";
import { MappingContext } from "../context";

function AddSpreadSheetForm({ setOpen }) {
  const [form] = Form.useForm();
  const { createMapping } = useContext(MappingContext);

  const onsubmit = (values) => {
    console.log(values);
    const res = createMapping(values);
    if (res) {
      form.resetFields();
      setOpen(false);
    }
  };

  return (
    <Form
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      onFinish={(values) => onsubmit(values)}
    >
      <Form.Item
        name="name"
        label="Table Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter Table Name" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter Table Description" />
      </Form.Item>

      <Form.Item
        name="db"
        label="Database"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Select DB">
          <Option value="mongodb">MongoDB</Option>
          <Option value="postgresql">PostgreSQL</Option>
        </Select>
      </Form.Item>

      <Form.List name="fields" style={{ width: "100%" }}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                  width: "100%",
                }}
              >
                <Form.Item
                  {...restField}
                  name={[name, "first"]}
                  rules={[
                    {
                      required: true,
                      message: "Enter Field Value",
                    },
                  ]}
                  style={{ flex: 1, marginRight: 8 }}
                >
                  <Input placeholder="Enter Field Value" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "select"]}
                  rules={[
                    {
                      required: true,
                      message: "Please select an option",
                    },
                  ]}
                  style={{ flex: 1, marginRight: 8 }}
                >
                  <Select placeholder="Select Data Type">
                    <Option value="option1">String</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Form.Item>
              </div>
            ))}
            <Form.Item style={{ width: "100%" }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item
        style={{ width: "100%", display: "flex", justifyContent: "right" }}
      >
        <Button type="primary" htmlType="submit" icon={<InboxOutlined />} block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddSpreadSheetForm;
