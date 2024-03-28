import React, { useEffect, useState } from "react";
import { Form, Row, Col, Card, Divider } from 'antd';
import axios from 'axios';

export default function TeamAdmin() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data.json').then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <Form>
            <Form.Item label='Administrators'>
                <Row gutter={8}>
                    {data &&
                        data.map((data, id) => (
                            <Col key={id}>
                                {data.role == 'admin' ?
                                    (<Card key={id} hoverable={true} style={{ width: '200px' }}>
                                        <p style={{ fontFamily: 'Poppins' }}>{data.first_name}{data.last_name}</p>
                                        <p>{data.email}</p>
                                    </Card>)
                                    : null
                                }
                            </Col>
                        ))}
                </Row>
            </Form.Item>
            <Divider />
            <Form.Item label='Members'>
                <Row gutter={8}>
                    {data &&
                        data.map((data, id) => (
                            <Col key={id}>
                                {data.role == 'member' ?
                                    (<Card key={id} style={{ width: '150px' }}>
                                        <p style={{ fontFamily: 'Poppins' }}>{data.first_name}{data.last_name}</p>
                                        <p>{data.email}</p>
                                    </Card>)
                                    : null
                                }
                            </Col>
                        ))}
                </Row>
            </Form.Item>
        </Form>
    )
};