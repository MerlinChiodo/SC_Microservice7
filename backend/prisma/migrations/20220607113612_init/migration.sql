-- CreateTable
CREATE TABLE `aboutUs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(255) NOT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `authorid` INTEGER NOT NULL,

    INDEX `aboutUs_authorid_fkey`(`authorid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(30) NOT NULL,
    `text` VARCHAR(255) NOT NULL,
    `date` TIMESTAMP(0) NULL,
    `authorid` INTEGER NOT NULL,

    INDEX `event_authorid_fkey`(`authorid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `prize` DOUBLE NOT NULL,
    `services` VARCHAR(255) NOT NULL,
    `conditions` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mitglied` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(30) NOT NULL,
    `firstname` VARCHAR(30) NOT NULL,
    `tarifid` INTEGER NOT NULL,
    `gassi` BOOLEAN NOT NULL DEFAULT false,

    INDEX `mitglied_tarifid_fkey`(`tarifid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kurs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `day` VARCHAR(30) NOT NULL,
    `start` TIMESTAMP(0) NOT NULL,
    `end` TIMESTAMP(0) NOT NULL,
    `description` VARCHAR(255) NULL,
    `coachid` INTEGER NOT NULL,

    INDEX `kurs_coachid_fkey`(`coachid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mitarbeiter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(30) NOT NULL,
    `firstname` VARCHAR(30) NOT NULL,
    `salary` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pet` (
    `name` VARCHAR(30) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`name`, `description`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_KursToMitglied` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_KursToMitglied_AB_unique`(`A`, `B`),
    INDEX `_KursToMitglied_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aboutUs` ADD CONSTRAINT `aboutUs_authorid_fkey` FOREIGN KEY (`authorid`) REFERENCES `mitarbeiter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_authorid_fkey` FOREIGN KEY (`authorid`) REFERENCES `mitarbeiter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mitglied` ADD CONSTRAINT `mitglied_tarifid_fkey` FOREIGN KEY (`tarifid`) REFERENCES `tarif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kurs` ADD CONSTRAINT `kurs_coachid_fkey` FOREIGN KEY (`coachid`) REFERENCES `mitarbeiter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_KursToMitglied` ADD CONSTRAINT `_KursToMitglied_A_fkey` FOREIGN KEY (`A`) REFERENCES `kurs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_KursToMitglied` ADD CONSTRAINT `_KursToMitglied_B_fkey` FOREIGN KEY (`B`) REFERENCES `mitglied`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
