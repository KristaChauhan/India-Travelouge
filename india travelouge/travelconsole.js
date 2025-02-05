function showMoreInfo(place) {
    let info = "";

    switch (place) {
        case 'Taj Mahal':
            info = "The Taj Mahal, a symbol of love, is located in Agra, Uttar Pradesh.";
            break;
        case 'Jaipur':
            info = "Jaipur, the Pink City of Rajasthan, is famous for its majestic forts and palaces.";
            break;
        case 'Kerala':
            info = "Kerala is known for its serene backwaters, lush greenery, and rich cultural heritage.";
            break;
        default:
            info = "Explore the beauty and diversity of India!";
    }

    alert(info);
}
