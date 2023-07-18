
import AppBar from './Navbar';
import Navigation from './Navbar'

export default function Header({currentPage, handlePageChange}) {
    const styles = {
        header_style: {
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // padding: 6,
            background: "#c0b1c7"
        },

        subHeader: {
            // display: "flex",
            // flexDDirection: "row",
            // alignItems: "flex-end",
            // height: 100,
            // justifyContent: "flex-end"
        }
    };
    return (

        <div 
        style={styles.header_style}
        >
            <AppBar currentPage={currentPage} handlePageChange={handlePageChange} />



        </div>

    );
}
