import RaamatuDetail from "./RaamatuDetail";

function LemmikRaamat() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
            <img src="https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg" height="400" />
            <RaamatuDetail />
        </div>
    )
}

export default LemmikRaamat;
