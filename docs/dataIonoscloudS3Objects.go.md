# `dataIonoscloudS3Objects` Submodule <a name="`dataIonoscloudS3Objects` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3Objects <a name="DataIonoscloudS3Objects" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects ionoscloud_s3_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3objects"

dataionosclouds3objects.NewDataIonoscloudS3Objects(scope Construct, id *string, config DataIonoscloudS3ObjectsConfig) DataIonoscloudS3Objects
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig">DataIonoscloudS3ObjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig">DataIonoscloudS3ObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner">ResetFetchOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys">ResetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter">ResetStartAfter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType"></a>

```go
func ResetEncodingType()
```

##### `ResetFetchOwner` <a name="ResetFetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner"></a>

```go
func ResetFetchOwner()
```

##### `ResetMaxKeys` <a name="ResetMaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys"></a>

```go
func ResetMaxKeys()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetStartAfter` <a name="ResetStartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter"></a>

```go
func ResetStartAfter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3objects"

dataionosclouds3objects.DataIonoscloudS3Objects_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3objects"

dataionosclouds3objects.DataIonoscloudS3Objects_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3objects"

dataionosclouds3objects.DataIonoscloudS3Objects_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3objects"

dataionosclouds3objects.DataIonoscloudS3Objects_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudS3Objects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudS3Objects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3Objects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes">CommonPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners">Owners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput">FetchOwnerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput">MaxKeysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput">StartAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType">EncodingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner">FetchOwner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys">MaxKeys</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter">StartAfter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CommonPrefixes`<sup>Required</sup> <a name="CommonPrefixes" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes"></a>

```go
func CommonPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners"></a>

```go
func Owners() *[]*string
```

- *Type:* *[]*string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput"></a>

```go
func EncodingTypeInput() *string
```

- *Type:* *string

---

##### `FetchOwnerInput`<sup>Optional</sup> <a name="FetchOwnerInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput"></a>

```go
func FetchOwnerInput() interface{}
```

- *Type:* interface{}

---

##### `MaxKeysInput`<sup>Optional</sup> <a name="MaxKeysInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput"></a>

```go
func MaxKeysInput() *f64
```

- *Type:* *f64

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `StartAfterInput`<sup>Optional</sup> <a name="StartAfterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput"></a>

```go
func StartAfterInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType"></a>

```go
func EncodingType() *string
```

- *Type:* *string

---

##### `FetchOwner`<sup>Required</sup> <a name="FetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner"></a>

```go
func FetchOwner() interface{}
```

- *Type:* interface{}

---

##### `MaxKeys`<sup>Required</sup> <a name="MaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys"></a>

```go
func MaxKeys() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `StartAfter`<sup>Required</sup> <a name="StartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter"></a>

```go
func StartAfter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3ObjectsConfig <a name="DataIonoscloudS3ObjectsConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionosclouds3objects"

&dataionosclouds3objects.DataIonoscloudS3ObjectsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Delimiter: *string,
	EncodingType: *string,
	FetchOwner: interface{},
	MaxKeys: *f64,
	Prefix: *string,
	StartAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType">EncodingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner">FetchOwner</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys">MaxKeys</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter">StartAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType"></a>

```go
EncodingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}.

---

##### `FetchOwner`<sup>Optional</sup> <a name="FetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner"></a>

```go
FetchOwner interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}.

---

##### `MaxKeys`<sup>Optional</sup> <a name="MaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys"></a>

```go
MaxKeys *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}.

---

##### `StartAfter`<sup>Optional</sup> <a name="StartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter"></a>

```go
StartAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}.

---


