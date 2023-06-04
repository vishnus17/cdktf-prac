import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { S3Bucket as awsS3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "ap-south-1",
    });

    // define resources here
    new awsS3Bucket(this, "my-bucket", {
      bucket: "cdktf-test-bucket-1",
    });
    

  }
}

const app = new App();
new MyStack(app, "cdktf");
app.synth();

