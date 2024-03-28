import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './App.css'
import TeamAdmin from './team_admin';

const { search } = Input;

export default function TeamHeader() {

    return (
        <>
            <div title='team' className='teamHeader'>
                Team
                <Input className='teamSearchInput' addonBefore={<SearchOutlined />} placeholder="Search" />
            </div>
            <TeamAdmin />
        </>
    )
};