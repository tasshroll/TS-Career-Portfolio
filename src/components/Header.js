import { useState } from "react"
import Navbar from './Navbar';

export default function Header() {
    const styles = {
        header: {
          margin:20,
          padding: 6,
          background: "#e4ebe5"},
        
        subHeader: {
            display: "flex",
            flexDDirection: "row",
            alignItems: "flex-end",
            height: 100,
            justifyContent: "flex-end"}
          };
    return (
        <div>
            <div className="header-style" id = "waves-img">
                <div>
                <h1 style={styles.header} >Tifni Shroll</h1>
                </div>
                <section className="subHeader">
                    <p className="subheading" style={styles.header}>
                        <bold>Creative/Professional</bold>
                    </p>
                </section>
            </div>
        </div>
    );
}
