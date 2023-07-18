
import AppBar from './Navbar';

export default function Header({currentPage, handlePageChange}) {
    const styles = {
        header_style: {
            background: "#c0b1c7"
        },
    };
    return (

        <div 
        style={styles.header_style}
        >
            <AppBar currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>

    );
}
