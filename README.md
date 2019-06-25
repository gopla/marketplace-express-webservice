### URL

https://marketplace-express.herokuapp.com/

### Service Produk
-  **GET**  */produk*
> menampilkan semua produk

- **GET** */produk/:id*
> menampilkan produk berdasarkan id

- **POST** */produk*
> menambahkan produk baru

- **PUT** */produk/:id*
> mengubah produk berdasarkan id

- **DELETE** */produk/:id*
> menghapus produk berdasarkan id

### Service Keranjang

- **GET** */keranjang/*
> menampilkan seluruh produk pada keranjang user

- **POST** */keranjang/*
> menambahkan produk ke keranjang

- **PUT** */keranjang/:id/*
> mengubah produk berdasarkan id_keranjang

- **DELETE** */keranjang/:id/*
> menghapus produk dalam keranjang berdasarkan id_keranjang

### Service Ongkir

- **GET** */provinsi/*
> menampilkan seluruh provinsi

- **GET** */provinsi/:id/kota*
> menampilkan seluruh kota berdasarkan provinsi

- **GET** */ongkir*
> menghitung ongkir

### Service Transaksi

- **GET** */transaksi*
> menampilkan seluruh transaksi

- **GET** */transaksi/:id*
> menampilkan satu transaksi berdasarkan id

- **GET** */transaksi/:id/detail*
> menampilkan seluruh detail transaksi berdasarkan id transaksi

- **GET** */transaksi/:id/detail/:id_detail*
> menampilkan satu detail berdasarkan id detail transaksi

- **POST** */transaksi*
> menambah transaksi

- **POST** */transaksi/:id/detail*
> menambah detail transaksi

- **PUT** */transaksi/:id*
> mengupdate transaksi (untuk upload bukti)