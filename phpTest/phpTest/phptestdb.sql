-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2016 at 08:43 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phptestdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(100) NOT NULL,
  `hashed_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `hashed_password`) VALUES
('admin', '$2y$10$BmE1smE2Siz6dCKdAensYuXLDwU7kdGtgLNTKn0kGZUvZ90yvrYoG');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(50) NOT NULL,
  `category` varchar(100) NOT NULL,
  `site_for` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `site_for`) VALUES
(1, 'toddler toys', 1),
(2, 'baby toys', 1),
(3, 'games', 1),
(4, 'outdoor play', 1),
(5, 'learning toys', 1),
(6, 'lego', 1),
(7, 'bedroom', 2),
(8, 'dinning room', 2),
(9, 'kids', 2),
(10, 'living room', 2),
(11, 'office', 2),
(12, 'bathroom', 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `site_for` int(50) NOT NULL,
  `category` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `price`, `site_for`, `category`) VALUES
(2, 'teething ring', '6.99', 1, 2),
(3, 'crib mobile', '20.99', 1, 2),
(4, 'roller block wagon', '29.99', 1, 1),
(5, 'plush dog', '9.99', 1, 1),
(6, 'big bounce ball', '8.99', 1, 1),
(7, 'monopoly', '11.99', 1, 3),
(8, 'trouble', '13.99', 1, 3),
(9, 'clue', '20.99', 1, 3),
(10, 'trampoline', '99.99', 1, 4),
(11, 'drone', '139.99', 1, 4),
(12, 'tricycle', '59.99', 1, 4),
(13, 'learning tablet', '29.99', 1, 5),
(15, 'doctor set', '7.99', 1, 5),
(16, 'tinker toys', '24.00', 1, 6),
(17, 'space ship lego set', '34.00', 1, 6),
(18, 'mega blocks', '66.99', 1, 6),
(20, 'night stand', '89.50', 2, 7),
(21, 'headboard', '150.00', 2, 7),
(22, 'breakfront', '279.99', 2, 8),
(23, 'dinning room table', '1200.00', 2, 8),
(24, 'wine cooler', '40.99', 2, 8),
(25, 'bunk bed', '199.99', 2, 9),
(26, 'bean bag chair', '21.99', 2, 9),
(27, 'toy chest', '16.99', 2, 9),
(28, 'recliner', '179.99', 2, 10),
(29, 'end table', '44.74', 2, 10),
(30, 'coffee table', '89.99', 2, 10),
(31, 'office chair', '104.74', 2, 11),
(32, 'desk', '125.45', 2, 11),
(33, 'file cabinet', '50.25', 2, 11),
(34, 'sink', '75.00', 2, 12),
(35, 'shower head', '18.00', 2, 12),
(36, 'medicine cabinet', '20.99', 2, 12),
(37, 'raddle', '45.99', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `site_name`
--

CREATE TABLE `site_name` (
  `id` int(50) NOT NULL,
  `name_of_site` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `site_name`
--

INSERT INTO `site_name` (`id`, `name_of_site`) VALUES
(1, 'my toy store'),
(2, 'my furniture store');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `site_for` (`site_for`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`),
  ADD KEY `site_for` (`site_for`);

--
-- Indexes for table `site_name`
--
ALTER TABLE `site_name`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `site_name`
--
ALTER TABLE `site_name`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`site_for`) REFERENCES `site_name` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`site_for`) REFERENCES `site_name` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
