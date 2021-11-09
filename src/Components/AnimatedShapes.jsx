import styled from 'styled-components'


const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #4e6bff;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;
    animation: square 20s linear alternate infinite;


    @keyframes square {
        to{
            transform: translate(59vw, 70vh);
        }
    }
`

const Circle = styled.div`
    width: 80px;
    height: 80px;
    background-color: #ff97af;
    opacity: 0.9;
    border-radius: 50%;
    position: absolute;
    top: 400px;
    left: -80px;
    z-index: -1;
    animation: circle 15s linear alternate infinite;


    @keyframes circle {
        to{
            transform: translate(66vw, -50vh);
        }
`

const Rect = styled.div`
    width: 100px;
    height: 45px;
    background-color: #669966;
    opacity: 0.5;
    position: absolute;
    top: -50px;
    left: 400px;
    z-index: -1;
    animation: rect 15s linear alternate infinite;


    @keyframes rect {
        to{
            transform: translate(50vw, 80vh);
        }
    }
`






const AnimatedShapes = () => {
    return (
        <>
            <Square />

            <Circle />

            <Rect />
        </>
    )
}

export default AnimatedShapes
