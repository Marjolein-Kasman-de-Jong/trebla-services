const slideInOut = {
    hidden: {
        y: "100vh"
    },
    visible: {
        y: 0,
        transition: {
            delay: .3,
            duration: .3
        }
    },
    exit: {
        y: "-100vh",
        transition: {
            duration: .3
        }
    }
}

export default slideInOut;