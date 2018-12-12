<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'about_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Sjn61%(eo[-@DmH/M$G:WAFL!LukGHUraG~tZNgu$s=$,,)SVjDD{v8{9NkUEy+1');
define('SECURE_AUTH_KEY',  'pOppe0-7bVX{<Xn*-VpMQ3tL8<3ii+q8NVH*aVq<[x52FL=5Ci~oZ{IfZAACj:2N');
define('LOGGED_IN_KEY',    'w!c%s6sLek>)3kQWmiUy/lz;(p`4$peI3x:SkU)[yIZj(7hoLwj*99RqK}0.qE8I');
define('NONCE_KEY',        'Z!ZX3?%n)ZFrDpG#qm$Z ,!mt|YNQsX~rlN)f>L|2)iDGa6zJSyY@WC_E,::F*/8');
define('AUTH_SALT',        '&7=6{nX~UrDuAm/_Ur{V,z!R<aezN!gR}V?nV[-A)C%DTzD4|~$VJucvd2}Km-$e');
define('SECURE_AUTH_SALT', '5ZeF3PQX(l[^A6jOuNqqs`MRR3X,XHg6fSC758-4`{tgBd/0{+LGeBs{RNOEwfxD');
define('LOGGED_IN_SALT',   '5.<mU=H( &XATl%(Scd!Df &xC#JY!/$lK?{X!/psg~*~Li4 i~JizcCf{U4+Ci@');
define('NONCE_SALT',       '|gl}^(E^FSE%;bXhdIxCv*dQv$Mpfz)>Eq.U/8$ACp|!64vTZg>3)[>Zx2jP@ e5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
