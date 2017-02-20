-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2016 at 11:23 PM
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
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `categories` varchar(20) NOT NULL,
  `picture` varchar(50) NOT NULL,
  `site_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `categories`, `picture`, `site_name`) VALUES
(1, 'Dell km636', '36.50', 'Keyboards And Mice', 'images/dellkm636.jpg', 'Dizzy Deals Accessories'),
(2, 'Dell wm324', '15.99', 'Keyboards And Mice', 'images/dellwm324.jpg', 'Dizzy Deals Accessories'),
(3, 'Dell 17359-2435', '538.99', 'Laptops', 'images/delli73592435.jpg', 'Dizzy Deals'),
(4, 'Dell i3559-4013', '719.00', 'Laptops', 'images/delli35594013.jpg', 'Dizzy Deals'),
(5, 'Dell e2015hv', '104.99', 'Monitors', 'images/delle2015hv.jpg', 'Dizzy Deals Accessories'),
(6, 'Dell se2216h', '119.75', 'Monitors', 'images/dellse2216h.jpg', 'Dizzy Deals Accessories'),
(7, 'Dell Chromebook xdjgh', '250.00', 'Chromebooks', 'images/DellChromebookxdjgh.jpg', 'Dizzy Deals'),
(8, 'Lenovo ideapad 110 11.6', '163.99', 'Chromebooks', 'images/Lenovoideapad11011.6.jpg', 'Dizzy Deals'),
(9, 'HP Pavillion 510-p026', '569.99', 'Desktops', 'images/hppavilion510p026.jpg', 'Dizzy Deals'),
(10, 'Dell i3650-3313slv', '549.99', 'Desktops', 'images/Delli3650-3313slv.jpg', 'Dizzy Deals'),
(11, 'Lenovo C40 AIO', '599.99', 'Computers', 'images/LenovoC40AIO.jpg', 'Dizzy Deals'),
(12, 'Lenovo C20 AIO', '334.99', 'Computers', 'images/lenovoc20.jpg', 'Dizzy Deals'),
(13, 'Dell i5559-3349', '554.37', 'Laptops', 'images/delli55593349.jpg', 'Dizzy Deals'),
(14, 'Dell i5559-1350', '399.99', 'Laptops', 'images/delli55591350.jpg', 'Dizzy Deals'),
(15, 'Dell i3168-0028', '238.99', 'Laptops', 'images/delli31680028.jpg', 'Dizzy Deals');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2y$10$vu4X3HPtAj91Z9.4C8owb.kwCfBXaW5Wl0ecWlbqZ24NrBmnlbpTG'),
(2, 'phpuser', '$2y$10$vu4X3HPtAj91Z9.4C8owb.kwCfBXaW5Wl0ecWlbqZ24NrBmnlbpTG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
