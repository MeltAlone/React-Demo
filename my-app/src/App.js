import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'
export default function App() {
    return (
        <div>
            <ThreeLayout
                gap={50}
                left={<div style={{
                    border:"2px solid #008c8c"
                }}>
                    左边栏
                </div>}
                right={<div style={{
                    border:"2px solid #008c8c"
                }}>
                    右边栏
                </div>}
            >
            <h1>主区域</h1>
            </ThreeLayout>
        </div>
    )
}
