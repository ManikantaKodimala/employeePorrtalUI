resource "aws_instance" "astro_backend" {
  ami = "ami-05ba3a39a75be1ec4"
  instance_type = "t2.medium"
  tags = {
    Name = var.name
  }
  key_name         = "my-ec2-ssh"
  vpc_security_group_ids = [aws_security_group.main.id]
  connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ubuntu"
    private_key = var.private_key
    timeout     = "4m"
  }
}

resource "aws_security_group" "main" {
  name = "astro-deploy-security-group"
  egress = [
    {
      cidr_blocks      = [ "0.0.0.0/0", ]
      description      = ""
      from_port        = 0
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "-1"
      security_groups  = []
      self             = false
      to_port          = 0
    }
  ]
  ingress                = [
    {
      cidr_blocks      = [ "0.0.0.0/0", ]
      description      = ""
      from_port        = 22
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 22
    },
    {
      cidr_blocks      = [
        "0.0.0.0/0",
      ]
      description      = ""
      from_port        = 3000
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 3000
    },
    {
      cidr_blocks      = [
        "0.0.0.0/0",
      ]
      description      = ""
      from_port        = 8080
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 8080
    }
  ]
}

resource "aws_key_pair" "devloper_key" {
  key_name   = "my-ec2-ssh"
  public_key = var.public_key
}

#resource "aws_s3_bucket" "terraform_state" {
#  bucket = var.bucket_name
#
#  versioning {
#    enabled = true
#  }
#}

resource "aws_db_instance" "employee" {
  identifier             = "astro-db"
  instance_class         = "db.t3.micro"
  allocated_storage      = 5
  engine                 = "postgres"
  engine_version         = "14.2"
  name                   = "employee"
  username               = "astro"
  password               = "astro063"
  publicly_accessible    = true
  skip_final_snapshot    = true
}

terraform {
  backend "s3" {
    bucket = "astro-backend-storage-terraform"
    key    = "terraform.tfstate"
    region = "ap-south-1"
    encrypt                 = true
  }
}

resource "aws_eip" "example" {
  vpc = true
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.astro_backend.id
  allocation_id = aws_eip.example.id
}
output "target" {
  value = aws_instance.astro_backend.public_ip
}

output "instance_endpoint" {
  value       = join("", aws_db_instance.employee.*.endpoint)
  description = "DNS Endpoint of the instance"
}