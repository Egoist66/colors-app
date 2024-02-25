import Swal from 'sweetalert2'

export const useCopy = () => {


    const copyText = (text: string) => {
        if(navigator.clipboard){
            navigator.clipboard.writeText(text)
                .then(() => {
                    Swal.fire({
                        title: "Color copied!",
                        text: `hex code - ${text}`,
                        icon: "success"
                    })
                })
        }
        else {
            Swal.fire({
                title: "Malfunction!",
                text: "Clipboard function does not supported in you browser",
                icon: "error"
            })
        }
    }

    return {
        copyText
    }
}