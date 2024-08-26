const slideIn = {
    hidden: {
        x: "100vw"
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 75,
            mass: 1,
            delay: .3
        }
    }    
}

export default slideIn;