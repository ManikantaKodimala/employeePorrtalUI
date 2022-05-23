variable "name" {
    description = "Name the instance on deploy"
    type= string
    default="astro-cicd-server-backend"
}
variable "bucket_name" {
    description = "name of bucket for backend"
    type= string
    default="astro-backend-storage-terraform"
}
variable "public_key"{}

variable "private_key"{}