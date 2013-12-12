<div class="fileManagerBand">
    <aside class="left">
        <form id="browseFile" action="index.php" method="post" enctype="multipart/form-data">
            <input type="file" name="file" id="file" hidden onChange="submitFile()"/>
            <input id="validate" type="submit" hidden/>
        </form>
        <form id="streaming" class="icon" method="post" action="index.php">
            <input type="search" name="fileSearch" placeholder="     Source sonore"/>
            <input type="submit" hidden/>
        </form>

        <a href="javascript:selectFile()" class="icon"><img src="img/folder.png" alt="browse"/></a>
    </aside>
    <aside class="right">
        <a href="#"><p class="address"><?php echo $address ?> </p></a>
        <ul>
            <?php getHistory() ?>
        </ul>
    </aside>
</div>