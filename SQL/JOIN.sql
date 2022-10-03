SELECT
  SalesLT.Customer.FirstName AS full_name,
  SalesLT.Customer.LastName AS last_name,
  SalesLT.CustomerAddress.AddressType AS address_type,
  SalesLT.CustomerAddress.rowguid AS rowguid
FROM SalesLT.Customer
JOIN SalesLT.CustomerAddress ON SalesLT.Customer.CustomerID= SalesLT.CustomerAddress.CustomerID;