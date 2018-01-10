import React from 'react'
import {Link} from "react-router-dom";

class Main extends React.Component {
    render() {
        const pathname = this.props.location.pathname;
        const {history} = this.props;
        const {goBack, goForward} = history || {};

        return <div className="main">
            <div className="top_part_container">
                <div className="side_left">
                    <div className="window_controls">
                        <div className="close_button"><i className="fa fa-close"/></div>
                        <div className="minimize_button"><i className="fa fa-minus"/></div>
                        <div className="maximize_button"><i className="fa fa-expand"/></div>
                    </div>
                    <div className="main_buttons">
                        <ul>
                            <li className={pathname === "/" ? "active": null}><Link to={"/"}>Parcourir</Link></li>
                        </ul>
                    </div>
                    <div className="library">
                        <h4>Bibliothèque</h4>
                        <ul>
                            <li className={pathname === "/dailymix" ? "active": null}><Link to={"/dailymix"}>Votre daily mix</Link></li>
                            <li className={pathname === "/recent" ? "active": null}><Link to={"/recent"}>Ecoutés récemments</Link></li>
                            <li className={pathname === "/titles" ? "active": null}><Link to={"/titles"}>Titres</Link></li>
                            <li className={pathname === "/albums" ? "active": null}><Link to={"/albums"}>Albums</Link></li>
                            <li className={pathname === "/artists" ? "active": null}><Link to={"/artists"}>Artistes</Link></li>
                            <li className={pathname === "/radios" ? "active": null}><Link to={"/radios"}>Radios</Link></li>
                            <li className={pathname === "/local" ? "active": null}><Link to={"/local"}>Fichiers locaux</Link></li>
                            <li className={pathname === "/podcast" ? "active": null}><Link to={"/podcast"}>Podcasts</Link></li>
                        </ul>
                    </div>
                    <div className="playlists">
                        <h4>Playlists</h4>
                        <ul>
                            <li>MyPlaylist</li>
                        </ul>
                    </div>
                </div>
                <div className="center_container">
                    <div className="top_bar">
                        <div className="left_part">
                            <div className="history_controls">
                                <div onClick={goBack} className={"previous "}><i className="fa fa-angle-left"/></div>
                                <div onClick={goForward} className={"next "}><i className="fa fa-angle-right"/></div>
                            </div>
                            <div className="search_box">
                                <i className="fa fa-search"/>
                                <input type="search" placeholder={"Rechercher"}/>
                            </div>
                        </div>
                        <div className="right_part">
                            <div className="avatar"><img src={`https://picsum.photos/50?random&${Math.random()}`} alt="avatar"/></div>
                            <div className="username">Dylan Chamoulaud</div>
                            <div className="options"><i className="fa fa-angle-down"/></div>
                        </div>
                    </div>
                    <div className="playlists_lists">
                        <h1>Vos Daily Mix</h1>
                        <h2>Ecoutez la musique que vous aimez sans le moindre effort. Un florilège de vos titres préférés et de nouvelles perles</h2>
                        <hr/>
                        <div className="song_card">
                            <div className="song_image"><img src={`https://picsum.photos/200?random&${Math.random()}`} alt="song_image"/></div>
                            <div className="song_title">Daily mix 1</div>
                            <div className="song_description">Nick Phoenix, Anti Martikkainen, Erik Erkholm et bien d'autres</div>
                            <div className="extras">Concocté pour Dylan</div>
                        </div>
                        <div className="song_card">
                            <div className="song_image"><img src={`https://picsum.photos/200?random&${Math.random()}`} alt="song_image"/></div>
                            <div className="song_title">Daily mix 1</div>
                            <div className="song_description">Nick Phoenix, Anti Martikkainen, Erik Erkholm et bien d'autres</div>
                            <div className="extras">Concocté pour Dylan</div>
                        </div>
                        <div className="song_card">
                            <div className="song_image"><img src={`https://picsum.photos/200?random&${Math.random()}`} alt="song_image"/></div>
                            <div className="song_title">Daily mix 1</div>
                            <div className="song_description">Nick Phoenix, Anti Martikkainen, Erik Erkholm et bien d'autres</div>
                            <div className="extras">Concocté pour Dylan</div>
                        </div>
                        <div className="song_card">
                            <div className="song_image"><img src={`https://picsum.photos/200?random&${Math.random()}`} alt="song_image"/></div>
                            <div className="song_title">Daily mix 1</div>
                            <div className="song_description">Nick Phoenix, Anti Martikkainen, Erik Erkholm et bien d'autres</div>
                            <div className="extras">Concocté pour Dylan</div>
                        </div>
                        <div className="song_card">
                            <div className="song_image"><img src={`https://picsum.photos/200?random&${Math.random()}`} alt="song_image"/></div>
                            <div className="song_title">Daily mix 1</div>
                            <div className="song_description">Nick Phoenix, Anti Martikkainen, Erik Erkholm et bien d'autres</div>
                            <div className="extras">Concocté pour Dylan</div>
                        </div>
                    </div>
                </div>
                <div className="side_right">
                    <h2>Activité de vos amis</h2>
                    <hr/>
                    <div className="friend_card">
                        <div className="avatar"><img src={`https://picsum.photos/50?random&${Math.random()}`} alt="avatar"/></div>
                        <div className="center_infos">
                            <div className="name">Oscar Grainger</div>
                            <div className="song_title">III ray (The King)</div>
                            <div className="artist_name">Kasabian</div>
                            <div className="album_name">For crying out loud</div>
                        </div>
                        <div className="time">1 h</div>
                    </div>
                    <div className="friend_card">
                        <div className="avatar"><img src={`https://picsum.photos/50?random&${Math.random()}`} alt="avatar"/></div>
                        <div className="center_infos">
                            <div className="name">Maxime Boisse</div>
                            <div className="song_title">La danse des canards</div>
                            <div className="artist_name">Ingékebab</div>
                            <div className="album_name">booty checker</div>
                        </div>
                        <div className="time">20 h</div>
                    </div>
                </div>
            </div>
            <div className="bottom_controller">
                <div className="left">
                    <div className="avatar"><img src={`https://picsum.photos/100?random&${Math.random()}`} alt="current music image"/></div>
                    <div className="infos">
                        <div className="title">Sohitetunagaru</div>
                        <div className="artist">Super Beaver</div>
                    </div>
                    <div className="add_to_favorites"><i className="fa fa-plus"/></div>
                </div>
                <div className="center">
                    <div className="top">
                        <i className="fa fa-heart-o"/>
                        <i className="fa fa-fast-backward"/>
                        <i className="fa fa-play-circle-o"/>
                        <i className="fa fa-fast-forward"/>
                        <i className="fa fa-ban fa-flip-vertical"/>
                    </div>
                    <div className="bottom">
                        <div className="time_left">2:10</div>
                        <div className="time_bar">
                            <div className="current_time_bar"/>
                        </div>
                        <div className="time_right">5:42</div>
                    </div>
                </div>
                <div className="right">
                    <i className="fa fa-list"/>
                    <i className="fa fa-window-maximize"/>
                    <i className="fa fa-volume-up"/>
                    <div className="sound_bar">
                        <div className="current_sound_bar"/>
                    </div>
                    <i className="fa fa-expand"/>
                </div>
            </div>
        </div>
    }
}

export default Main;