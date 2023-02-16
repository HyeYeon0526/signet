import Login from "@/login";

function LogModal () {
    function cancleHandler() {
        props.onCancle()
    }
    function confirmHandler() {
        props.onConfirm()
    }

    return <div className="modal">
        <Login />
    </div>
    
}

export default LogModal;