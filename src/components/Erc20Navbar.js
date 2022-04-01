import React from "react";
import { Link } from "react-router-dom";
import navlogo from "./image/logo.png";
import meta from "./image/meta.png";
import connect from "./image/connect.svg";
import { FaEthereum } from "react-icons/fa";

export default function Erc20Navbar() {
  return (
    <div>
      <section>
        <header className="header fixed-top header-animated">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img className="logo" src={navlogo} alt="..." width="150" />
              </a>
              <button
                className="navbar-toggler navbar-toggler-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item-1">
                    <Link to="/" className="nav-link-1">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item-1">
                    <Link to="/tutorial" className="nav-link-1">
                      Tutorial
                    </Link>
                  </li>
                  <li className="nav-item-1">
                    <Link to="/faq" className="nav-link-1">
                      FAQ
                    </Link>
                  </li>

                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    connect
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div>
          {/* POPUP */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header1 ">
                  <h5 className="modal-title m-auto" id="exampleModalLabel ">
                    Please Select Your Web3 Wallet
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex justify-content-evenly">
                  <div className="wallets-link">
                    <button style={{ padding: "10px", borderRadius: "12px" }}>
                      <img
                        src={meta}
                        alt=""
                        style={{
                          width: "87px",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <h4
                        className="wallets"
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        MetaMask
                      </h4>{" "}
                    </button>
                  </div>
                  <div
                    className="wallets-link 
                   w-25"
                  >
                    <button style={{ padding: "10px", borderRadius: "12px" }}>
                      <img
                        src={connect}
                        alt=""
                        style={{
                          width: "70px",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <h4
                        className="wallets"
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        WalletConnect
                      </h4>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}