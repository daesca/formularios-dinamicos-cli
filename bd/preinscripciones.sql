-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2020 a las 05:28:13
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `preinscripciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campaigns`
--

CREATE TABLE `campaigns` (
  `id` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `category` tinyint(4) NOT NULL,
  `startDate` date NOT NULL,
  `finalDate` date NOT NULL,
  `totalAspirants` int(11) NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0: No publicada, 1: Publicada',
  `deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0: Registro no eliminado, 1: Registro eliminado',
  `renderDefault` longtext COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Se guarda la serializacion del formulario base asociado a esta campaña',
  `render` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `campaigns`
--

INSERT INTO `campaigns` (`id`, `code`, `name`, `category`, `startDate`, `finalDate`, `totalAspirants`, `published`, `deleted`, `renderDefault`, `render`, `created_at`, `updated_at`) VALUES
(4, 55171, 'Campaña 6 editado', 1, '2015-05-12', '2016-06-24', 350, 1, 0, NULL, NULL, '2020-03-29 00:40:21', '2020-04-10 20:59:50'),
(7, 93969, 'Campaña 6', 0, '2015-05-12', '2016-06-24', 350, 1, 1, NULL, NULL, '2020-03-29 03:35:30', '2020-04-11 03:31:20'),
(11, 16608, 'Campaña 10', 0, '2034-03-12', '6320-05-12', 1258, 1, 0, NULL, NULL, '2020-04-07 14:55:55', '2020-04-10 21:42:14'),
(12, 68028, 'Campaña 11', 0, '2015-03-12', '2016-12-12', 1500, 1, 0, NULL, NULL, '2020-04-10 14:44:54', '2020-04-14 18:08:48'),
(13, 57694, 'Campaña 13', 0, '2011-05-09', '2015-06-12', 150, 1, 0, '[{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"Tipo documento\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-0\",\"cssClass\":\"tipoDocumentoSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"C\\u00e9dula de ciudadan\\u00eda\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"},{\"optionTitle\":\"C\\u00e9dula de extranjer\\u00eda\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Tarjeta de indentidad\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Permiso especial de permanencia\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"1\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"N\\u00famero de documento\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"number\",\"name\":\"campaign-13-defaultForm-1\",\"cssClass\":\"numeroDocumentoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"2\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"Sexo\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-2\",\"cssClass\":\"sexoSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Mujer\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Hombre\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"3\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"N\\u00famero Tarjeta de Identidad\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-3\",\"cssClass\":\"numeroTarjetaIdentidadSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Mismo N\\u00famero de c\\u00e9dula\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Tarjeta de identidad\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No aplica\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"4\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"N\\u00famero de tarjeta de identidad\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-4\",\"cssClass\":\"numeroTarjetaIdentidadCondicionSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"5\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Primer nombre\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-5\",\"cssClass\":\"\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"6\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Segundo nombre\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-6\",\"cssClass\":\"segundoNombreSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"7\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Primer apellido\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-7\",\"cssClass\":\"primerApellidoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"8\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Segundo apellido\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-8\",\"cssClass\":\"segundoApellido\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"9\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Fecha de nacimiento\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"date\",\"name\":\"campaign-13-defaultForm-9\",\"cssClass\":\"fechaNacimientoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"10\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Edad\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"number\",\"name\":\"campaign-13-defaultForm-10\",\"cssClass\":\"edadSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"11\"},{\"typeField\":\"countriesField\",\"configurations\":{\"title\":\"Pa\\u00eds de nacimiento\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-11\",\"cssClass\":\"paisNacimientoSapiencia\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"12\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Lugar de nacimiento\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-12\",\"cssClass\":\"lugarNacimientoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"13\"},{\"typeField\":\"departmentsField\",\"configurations\":{\"title\":\"Departamento de nacimiento\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-13\",\"cssClass\":\"departamentoNacimientoSapiencia\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"14\"},{\"typeField\":\"townsField\",\"configurations\":{\"title\":\"Municipio de nacimiento\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-14\",\"cssClass\":\"municipioNacimientoSapiencia\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"15\"},{\"typeField\":\"departmentsField\",\"configurations\":{\"title\":\"Departamento de residencia\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-15\",\"cssClass\":\"departamentoResidenciaSapiencia\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"16\"},{\"typeField\":\"townsField\",\"configurations\":{\"title\":\"Municipio de residencia\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-16\",\"cssClass\":\"municipioResidenciaSapiencia\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"17\"},{\"typeField\":\"neighborhoodField\",\"configurations\":{\"title\":\"Barrio, comuna, corregimiento o vereda de residencia\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-17\",\"cssClass\":\"lugarResidenciaListaSapiencia\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"18\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Barrio, comuna, corregimiento o vereda de residencia\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-18\",\"cssClass\":\"lugarResidenciaTextoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"19\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Direcci\\u00f3n de residencia\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-19\",\"cssClass\":\"direccionResidenciaSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"20\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Tel\\u00e9fono fijo\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"number\",\"name\":\"campaign-13-defaultForm-20\",\"cssClass\":\"telefonoFijoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"21\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Celular\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"number\",\"name\":\"campaign-13-defaultForm-21\",\"cssClass\":\"celularSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"22\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"Estrato de la vivienda en que resides\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-22\",\"cssClass\":\"estratoSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"1\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"2\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"3\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"4\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"5\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"},{\"optionTitle\":\"6\",\"htmlValue\":\"6\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"23\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Correo electr\\u00f3nico\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-23\",\"cssClass\":\"correoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"24\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Confirma el correo electr\\u00f3nico\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-24\",\"cssClass\":\"confirmarCorreoSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"25\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfTienes hijos?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-25\",\"cssClass\":\"tieneHijosSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"26\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfCu\\u00e1ntos hijos tiene?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-26\",\"cssClass\":\"cantidadHijosSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"1\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"2\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"3\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"4\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"5 o m\\u00e1s\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"27\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfFue madre o padre por primera vez, siendo menor de 19 a\\u00f1os?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-27\",\"cssClass\":\"padreMenorSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"28\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfEs usted madre o padre soltero?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-28\",\"cssClass\":\"\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"29\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfTienes alguna condici\\u00f3n de vulnerabilidad?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-29\",\"cssClass\":\"vulnerabilidadSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"30\"},{\"typeField\":\"checkField\",\"configurations\":{\"title\":\"Por favor seleccione una o varias opciones de vulnerabilidad seg\\u00fan sea su caso\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-30\",\"cssClass\":\"tipoVulnerabilidad\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Desmovilizado\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Desvinculado del conflicto\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Desplazamiento\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"V\\u00edctima de conflicto armado reconocido por la unidad de v\\u00edctimas\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Pertenece al sistema de responsabilidad penal para adolescentes (SRPA)\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Pertenece al sistema de restablecimiento de derechos PARD\",\"htmlValue\":\"6\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Pospenado\",\"htmlValue\":\"7\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Mujer v\\u00edctima de violencia basada en g\\u00e9nero\",\"htmlValue\":\"8\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"31\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfTe encuentras en condici\\u00f3n de discapacidad?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-31\",\"cssClass\":\"discapacidadSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"32\"},{\"typeField\":\"checkField\",\"configurations\":{\"title\":\"Por favor seleccione una o varias opciones de discapacidad seg\\u00fan sea su caso\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-32\",\"cssClass\":\"tipoDiscapacidadSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Auditiva\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Cognitiva\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"F\\u00edsica\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Visual\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Voz y habla\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"33\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfTe reconoces como poblaci\\u00f3n afrocolombiana?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-33\",\"cssClass\":\"afrocolombianoSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"34\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"Indique la poblaci\\u00f3n a la que pertenece\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-34\",\"cssClass\":\"poblacionesAfrocolombianasSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Negro-Afrodescendiente\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Palenquero\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Raizal\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Otra\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"35\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Nombre de la entidad\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-35\",\"cssClass\":\"nombrePoblacionAfrodescendienteSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"36\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfPerteneces a una etnia ind\\u00edgena?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-36\",\"cssClass\":\"etniaIndigenaSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"37\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"Indique la poblaci\\u00f3n a la que pertenece\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-37\",\"cssClass\":\"poblacionesIndigenasSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Embera (Dobid\\u00e1, Eyabid\\u00e1, kat\\u00edo y chami)\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Ingas\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Kams\\u00e1\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Nasa (Paez)\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Pijaos\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Sen\\u00fa\",\"htmlValue\":\"6\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Tul\\u00e9 (Kuna)\",\"htmlValue\":\"7\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Otra\",\"htmlValue\":\"8\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"38\"},{\"typeField\":\"multipleField\",\"configurations\":{\"title\":\"Nombre de la entidad\",\"weight\":\"0\",\"defaultValue\":\"\",\"type\":\"text\",\"name\":\"campaign-13-defaultForm-38\",\"cssClass\":\"nombrePoblacionIndigenaSapiencia\",\"min\":\"\",\"max\":\"\",\"required\":\"1\"},\"deleted\":\"0\",\"idField\":\"39\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfTe reconoces como poblaci\\u00f3n LGTBI?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-39\",\"cssClass\":\"lgbtiSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"40\"},{\"typeField\":\"checkField\",\"configurations\":{\"title\":\"Seleccionar\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-40\",\"cssClass\":\"tipoLGBTISapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Lesbiana\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Gay\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Transgenero\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Bisexual\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Intersexual\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"41\"},{\"typeField\":\"selectField\",\"configurations\":{\"title\":\"\\u00bfPor cu\\u00e1l medio te enteraste de la convocatoria?\",\"weight\":\"0\",\"name\":\"campaign-13-defaultForm-41\",\"cssClass\":\"convocatoriaSapiencia\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Radio\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Redes sociales\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"P\\u00e1gina oficial de Sapiencia\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Orientador Sapiencia en mi comuna\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Orientador Sapiencia en punto fijo\",\"htmlValue\":\"5\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Orientador Sapiencia en mi colegio\",\"htmlValue\":\"6\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Sede principal Sapiencia\",\"htmlValue\":\"7\",\"optionWeight\":\"0\"}]},\"deleted\":\"0\",\"idField\":\"42\"}]', '[{\"typeField\":\"radioField\",\"deleted\":\"0\",\"configurations\":{\"title\":\"Unica opcion\",\"weight\":\"50\",\"name\":\"campaign-13-custom-8\",\"cssClass\":\"clase1 clase2 clase3\",\"required\":\"1\",\"options\":[{\"optionTitle\":\"Elemento 1\",\"htmlValue\":\"1\",\"optionWeight\":\"50\"},{\"optionTitle\":\"Elemento 2\",\"htmlValue\":\"2\",\"optionWeight\":\"50\"},{\"optionTitle\":\"Elemento 3\",\"htmlValue\":\"3\",\"optionWeight\":\"1\"}]},\"idField\":\"43\"}]', '2020-04-12 00:43:53', '2020-04-16 05:06:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campaign_field`
--

CREATE TABLE `campaign_field` (
  `id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `campaign_field`
--

INSERT INTO `campaign_field` (`id`, `campaign_id`, `field_id`, `created_at`, `updated_at`) VALUES
(1, 13, 1, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(2, 13, 2, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(3, 13, 3, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(4, 13, 4, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(5, 13, 5, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(6, 13, 6, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(7, 13, 7, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(8, 13, 8, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(9, 13, 9, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(10, 13, 10, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(11, 13, 11, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(12, 13, 12, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(13, 13, 13, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(14, 13, 14, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(15, 13, 15, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(16, 13, 16, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(17, 13, 17, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(18, 13, 18, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(19, 13, 19, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(20, 13, 20, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(21, 13, 21, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(22, 13, 22, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(23, 13, 23, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(24, 13, 24, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(25, 13, 25, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(26, 13, 26, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(27, 13, 27, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(28, 13, 28, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(29, 13, 29, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(30, 13, 30, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(31, 13, 31, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(32, 13, 32, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(33, 13, 33, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(34, 13, 34, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(35, 13, 35, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(36, 13, 36, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(37, 13, 37, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(38, 13, 38, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(39, 13, 39, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(40, 13, 40, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(41, 13, 41, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(42, 13, 42, '2020-04-14 23:12:35', '2020-04-14 23:12:35'),
(43, 13, 43, '2020-04-15 22:06:18', '2020-04-15 22:06:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `document` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fields`
--

CREATE TABLE `fields` (
  `id` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `weight` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0: Registro no eliminado, 1: Registro eliminado',
  `defaultForm` tinyint(1) NOT NULL COMMENT '0: No hace parte del formulario base, 1: Hace parte del formulario base',
  `typeField` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `options` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `required` tinyint(1) NOT NULL DEFAULT 1,
  `defaultValue` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cssClass` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `fields`
--

INSERT INTO `fields` (`id`, `title`, `weight`, `name`, `min`, `max`, `deleted`, `defaultForm`, `typeField`, `type`, `options`, `required`, `defaultValue`, `cssClass`, `created_at`, `updated_at`) VALUES
(1, 'Tipo documento', 0, 'campaign-13-defaultForm-0', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"C\\u00e9dula de ciudadan\\u00eda\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"},{\"optionTitle\":\"C\\u00e9dula de extranjer\\u00eda\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Tarjeta de indentidad\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"opt', 1, NULL, 'tipoDocumentoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(2, 'Número de documento', 0, 'campaign-13-defaultForm-1', 0, 0, 0, 0, 'multipleField', 'number', 'null', 1, '', 'numeroDocumentoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(3, 'Sexo', 0, 'campaign-13-defaultForm-2', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Mujer\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Hombre\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"}]', 1, NULL, 'sexoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(4, 'Número Tarjeta de Identidad', 0, 'campaign-13-defaultForm-3', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Mismo N\\u00famero de c\\u00e9dula\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Tarjeta de identidad\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No aplica\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"}]', 1, NULL, 'numeroTarjetaIdentidadSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(5, 'Número de tarjeta de identidad', 0, 'campaign-13-defaultForm-4', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'numeroTarjetaIdentidadCondicionSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(6, 'Primer nombre', 0, 'campaign-13-defaultForm-5', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', '', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(7, 'Segundo nombre', 0, 'campaign-13-defaultForm-6', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'segundoNombreSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(8, 'Primer apellido', 0, 'campaign-13-defaultForm-7', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'primerApellidoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(9, 'Segundo apellido', 0, 'campaign-13-defaultForm-8', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'segundoApellido', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(10, 'Fecha de nacimiento', 0, 'campaign-13-defaultForm-9', 0, 0, 0, 0, 'multipleField', 'date', 'null', 1, '', 'fechaNacimientoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(11, 'Edad', 0, 'campaign-13-defaultForm-10', 0, 0, 0, 0, 'multipleField', 'number', 'null', 1, '', 'edadSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(12, 'País de nacimiento', 0, 'campaign-13-defaultForm-11', NULL, NULL, 0, 0, 'countriesField', NULL, 'null', 1, NULL, 'paisNacimientoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(13, 'Lugar de nacimiento', 0, 'campaign-13-defaultForm-12', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'lugarNacimientoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(14, 'Departamento de nacimiento', 0, 'campaign-13-defaultForm-13', NULL, NULL, 0, 0, 'departmentsField', NULL, 'null', 1, NULL, 'departamentoNacimientoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(15, 'Municipio de nacimiento', 0, 'campaign-13-defaultForm-14', NULL, NULL, 0, 0, 'townsField', NULL, 'null', 1, NULL, 'municipioNacimientoSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(16, 'Departamento de residencia', 0, 'campaign-13-defaultForm-15', NULL, NULL, 0, 0, 'departmentsField', NULL, 'null', 1, NULL, 'departamentoResidenciaSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(17, 'Municipio de residencia', 0, 'campaign-13-defaultForm-16', NULL, NULL, 0, 0, 'townsField', NULL, 'null', 1, NULL, 'municipioResidenciaSapiencia', '2020-04-15 06:12:34', '2020-04-16 05:06:31'),
(18, 'Barrio, comuna, corregimiento o vereda de residencia', 0, 'campaign-13-defaultForm-17', NULL, NULL, 0, 0, 'neighborhoodField', NULL, 'null', 1, NULL, 'lugarResidenciaListaSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(19, 'Barrio, comuna, corregimiento o vereda de residencia', 0, 'campaign-13-defaultForm-18', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'lugarResidenciaTextoSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(20, 'Dirección de residencia', 0, 'campaign-13-defaultForm-19', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'direccionResidenciaSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(21, 'Teléfono fijo', 0, 'campaign-13-defaultForm-20', 0, 0, 0, 0, 'multipleField', 'number', 'null', 1, '', 'telefonoFijoSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(22, 'Celular', 0, 'campaign-13-defaultForm-21', 0, 0, 0, 0, 'multipleField', 'number', 'null', 1, '', 'celularSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(23, 'Estrato de la vivienda en que resides', 0, 'campaign-13-defaultForm-22', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"1\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"2\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"3\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"4\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"5\",\"htmlValue', 1, NULL, 'estratoSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(24, 'Correo electrónico', 0, 'campaign-13-defaultForm-23', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'correoSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(25, 'Confirma el correo electrónico', 0, 'campaign-13-defaultForm-24', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'confirmarCorreoSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(26, '¿Tienes hijos?', 0, 'campaign-13-defaultForm-25', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'tieneHijosSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(27, '¿Cuántos hijos tiene?', 0, 'campaign-13-defaultForm-26', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"1\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"2\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"3\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"4\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"optionTitle\":\"5 o m\\u00e1s\"', 1, NULL, 'cantidadHijosSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(28, '¿Fue madre o padre por primera vez, siendo menor de 19 años?', 0, 'campaign-13-defaultForm-27', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'padreMenorSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(29, '¿Es usted madre o padre soltero?', 0, 'campaign-13-defaultForm-28', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, '', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(30, '¿Tienes alguna condición de vulnerabilidad?', 0, 'campaign-13-defaultForm-29', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'vulnerabilidadSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(31, 'Por favor seleccione una o varias opciones de vulnerabilidad según sea su caso', 0, 'campaign-13-defaultForm-30', NULL, NULL, 0, 0, 'checkField', NULL, '[{\"optionTitle\":\"Desmovilizado\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Desvinculado del conflicto\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Desplazamiento\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"V\\u00edctima de co', 1, NULL, 'tipoVulnerabilidad', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(32, '¿Te encuentras en condición de discapacidad?', 0, 'campaign-13-defaultForm-31', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'discapacidadSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(33, 'Por favor seleccione una o varias opciones de discapacidad según sea su caso', 0, 'campaign-13-defaultForm-32', NULL, NULL, 0, 0, 'checkField', NULL, '[{\"optionTitle\":\"Auditiva\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Cognitiva\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"F\\u00edsica\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Visual\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"}', 1, NULL, 'tipoDiscapacidadSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(34, '¿Te reconoces como población afrocolombiana?', 0, 'campaign-13-defaultForm-33', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'afrocolombianoSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(35, 'Indique la población a la que pertenece', 0, 'campaign-13-defaultForm-34', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Negro-Afrodescendiente\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Palenquero\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Raizal\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Otra\",\"htmlValue\":\"4\",\"optionWeig', 1, NULL, 'poblacionesAfrocolombianasSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(36, 'Nombre de la entidad', 0, 'campaign-13-defaultForm-35', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'nombrePoblacionAfrodescendienteSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(37, '¿Perteneces a una etnia indígena?', 0, 'campaign-13-defaultForm-36', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'etniaIndigenaSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(38, 'Indique la población a la que pertenece', 0, 'campaign-13-defaultForm-37', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Embera (Dobid\\u00e1, Eyabid\\u00e1, kat\\u00edo y chami)\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Ingas\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Kams\\u00e1\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Na', 1, NULL, 'poblacionesIndigenasSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(39, 'Nombre de la entidad', 0, 'campaign-13-defaultForm-38', 0, 0, 0, 0, 'multipleField', 'text', 'null', 1, '', 'nombrePoblacionIndigenaSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(40, '¿Te reconoces como población LGTBI?', 0, 'campaign-13-defaultForm-39', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Si\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"No\",\"htmlValue\":\"0\",\"optionWeight\":\"0\"}]', 1, NULL, 'lgbtiSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(41, 'Seleccionar', 0, 'campaign-13-defaultForm-40', NULL, NULL, 0, 0, 'checkField', NULL, '[{\"optionTitle\":\"Lesbiana\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Gay\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Transgenero\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Bisexual\",\"htmlValue\":\"4\",\"optionWeight\":\"0\"},{\"o', 1, NULL, 'tipoLGBTISapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(42, '¿Por cuál medio te enteraste de la convocatoria?', 0, 'campaign-13-defaultForm-41', NULL, NULL, 0, 0, 'selectField', NULL, '[{\"optionTitle\":\"Radio\",\"htmlValue\":\"1\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Redes sociales\",\"htmlValue\":\"2\",\"optionWeight\":\"0\"},{\"optionTitle\":\"P\\u00e1gina oficial de Sapiencia\",\"htmlValue\":\"3\",\"optionWeight\":\"0\"},{\"optionTitle\":\"Orientador Sapiencia', 1, NULL, 'convocatoriaSapiencia', '2020-04-15 06:12:35', '2020-04-16 05:06:31'),
(43, 'Unica opcion', 50, 'campaign-13-custom-8', NULL, NULL, 0, 0, 'radioField', NULL, '[{\"optionTitle\":\"Elemento 1\",\"htmlValue\":\"1\",\"optionWeight\":\"50\"},{\"optionTitle\":\"Elemento 2\",\"htmlValue\":\"2\",\"optionWeight\":\"50\"},{\"optionTitle\":\"Elemento 3\",\"htmlValue\":\"3\",\"optionWeight\":\"1\"}]', 1, NULL, 'clase1 clase2 clase3', '2020-04-16 05:06:18', '2020-04-16 05:06:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responses_campaign`
--

CREATE TABLE `responses_campaign` (
  `id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  `document_id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indices de la tabla `campaign_field`
--
ALTER TABLE `campaign_field`
  ADD PRIMARY KEY (`id`),
  ADD KEY `campaign_fields_campaign_id` (`campaign_id`),
  ADD KEY `campaign_fields_field_id` (`field_id`);

--
-- Indices de la tabla `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fields`
--
ALTER TABLE `fields`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `responses_campaign`
--
ALTER TABLE `responses_campaign`
  ADD PRIMARY KEY (`id`),
  ADD KEY `responses_campaign_campaign_id` (`campaign_id`),
  ADD KEY `responses_campaign_field_id` (`field_id`),
  ADD KEY `responses_campaign_document_id` (`document_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `campaign_field`
--
ALTER TABLE `campaign_field`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fields`
--
ALTER TABLE `fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `responses_campaign`
--
ALTER TABLE `responses_campaign`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campaign_field`
--
ALTER TABLE `campaign_field`
  ADD CONSTRAINT `campaign_fields_campaign_id` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `campaign_fields_field_id` FOREIGN KEY (`field_id`) REFERENCES `fields` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `responses_campaign`
--
ALTER TABLE `responses_campaign`
  ADD CONSTRAINT `responses_campaign_campaign_id` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `responses_campaign_document_id` FOREIGN KEY (`document_id`) REFERENCES `documents` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `responses_campaign_field_id` FOREIGN KEY (`field_id`) REFERENCES `fields` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
