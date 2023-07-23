
import NavAnchors from './NavAnchors';

export default function Header() {
    const styles = {
        header_style: {
            background: "#c0b1c7"
        },
    };
    return (

        <div 
        style={styles.header_style}
        >
            <NavAnchors  />
        </div>

    );
}
