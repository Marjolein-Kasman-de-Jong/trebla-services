const validationErrorMessages = {
    from_name: "De invoer moet 2 tot 50 tekens bevatten en mag alleen letters, spaties, koppeltekens en apostroffen hebben. Dubbele spaties en symbolen zijn niet toegestaan.",
    reply_to: "De invoer moet beginnen met een teken dat geen spatie of @ is, precies één @ bevatten, gevolgd door een geldige domeinnaam met minimaal één punt en een geldig topdomein.",
    message: "De invoer moet tussen 10 en 500 tekens lang zijn, geen dubbele spaties of symbolen bevatten, en mag niet alleen uit speciale tekens bestaan."
}

export default validationErrorMessages;