# `dataIonoscloudS3BucketPublicAccessBlock` Submodule <a name="`dataIonoscloudS3BucketPublicAccessBlock` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3BucketPublicAccessBlock <a name="DataIonoscloudS3BucketPublicAccessBlock" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block ionoscloud_s3_bucket_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3bucketpublicaccessblock"

dataionosclouds3bucketpublicaccessblock.NewDataIonoscloudS3BucketPublicAccessBlock(scope Construct, id *string, config DataIonoscloudS3BucketPublicAccessBlockConfig) DataIonoscloudS3BucketPublicAccessBlock
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig">DataIonoscloudS3BucketPublicAccessBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig">DataIonoscloudS3BucketPublicAccessBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls"></a>

```go
func ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy"></a>

```go
func ResetBlockPublicPolicy()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls"></a>

```go
func ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets"></a>

```go
func ResetRestrictPublicBuckets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3bucketpublicaccessblock"

dataionosclouds3bucketpublicaccessblock.DataIonoscloudS3BucketPublicAccessBlock_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3bucketpublicaccessblock"

dataionosclouds3bucketpublicaccessblock.DataIonoscloudS3BucketPublicAccessBlock_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3bucketpublicaccessblock"

dataionosclouds3bucketpublicaccessblock.DataIonoscloudS3BucketPublicAccessBlock_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3bucketpublicaccessblock"

dataionosclouds3bucketpublicaccessblock.DataIonoscloudS3BucketPublicAccessBlock_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudS3BucketPublicAccessBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudS3BucketPublicAccessBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3BucketPublicAccessBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput"></a>

```go
func BlockPublicAclsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput"></a>

```go
func BlockPublicPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput"></a>

```go
func IgnorePublicAclsInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```go
func RestrictPublicBucketsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() interface{}
```

- *Type:* interface{}

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3BucketPublicAccessBlockConfig <a name="DataIonoscloudS3BucketPublicAccessBlockConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3bucketpublicaccessblock"

&dataionosclouds3bucketpublicaccessblock.DataIonoscloudS3BucketPublicAccessBlockConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	BlockPublicAcls: interface{},
	BlockPublicPolicy: interface{},
	IgnorePublicAcls: interface{},
	RestrictPublicBuckets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}.

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls"></a>

```go
BlockPublicAcls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}.

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```go
BlockPublicPolicy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}.

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```go
IgnorePublicAcls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```go
RestrictPublicBuckets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}.

---



