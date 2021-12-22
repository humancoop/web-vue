import axios from 'axios'

export const newMember = async (data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/new_member`,
        data
    )
    return response.data
}

export const newDonation = async (data) => {
    console.log("ENVIA DATOS")
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/new_donation`,
        data
    )
    console.log("DATOS ENVIADOS")
    return response.data
}
