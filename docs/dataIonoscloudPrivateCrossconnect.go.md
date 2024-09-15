# `dataIonoscloudPrivateCrossconnect` Submodule <a name="`dataIonoscloudPrivateCrossconnect` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudPrivateCrossconnect <a name="DataIonoscloudPrivateCrossconnect" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect ionoscloud_private_crossconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.NewDataIonoscloudPrivateCrossconnect(scope Construct, id *string, config DataIonoscloudPrivateCrossconnectConfig) DataIonoscloudPrivateCrossconnect
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig">DataIonoscloudPrivateCrossconnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig">DataIonoscloudPrivateCrossconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts"></a>

```go
func PutTimeouts(value DataIonoscloudPrivateCrossconnectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudPrivateCrossconnect resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnect_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnect_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnect_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnect_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudPrivateCrossconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudPrivateCrossconnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudPrivateCrossconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudPrivateCrossconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.connectableDatacenters">ConnectableDatacenters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList">DataIonoscloudPrivateCrossconnectConnectableDatacentersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.peers">Peers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList">DataIonoscloudPrivateCrossconnectPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference">DataIonoscloudPrivateCrossconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConnectableDatacenters`<sup>Required</sup> <a name="ConnectableDatacenters" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.connectableDatacenters"></a>

```go
func ConnectableDatacenters() DataIonoscloudPrivateCrossconnectConnectableDatacentersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList">DataIonoscloudPrivateCrossconnectConnectableDatacentersList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.peers"></a>

```go
func Peers() DataIonoscloudPrivateCrossconnectPeersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList">DataIonoscloudPrivateCrossconnectPeersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeouts"></a>

```go
func Timeouts() DataIonoscloudPrivateCrossconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference">DataIonoscloudPrivateCrossconnectTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudPrivateCrossconnectConfig <a name="DataIonoscloudPrivateCrossconnectConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

&dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Id: *string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.timeouts"></a>

```go
Timeouts DataIonoscloudPrivateCrossconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#timeouts DataIonoscloudPrivateCrossconnect#timeouts}

---

### DataIonoscloudPrivateCrossconnectConnectableDatacenters <a name="DataIonoscloudPrivateCrossconnectConnectableDatacenters" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

&dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters {

}
```


### DataIonoscloudPrivateCrossconnectPeers <a name="DataIonoscloudPrivateCrossconnectPeers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

&dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnectPeers {

}
```


### DataIonoscloudPrivateCrossconnectTimeouts <a name="DataIonoscloudPrivateCrossconnectTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

&dataionoscloudprivatecrossconnect.DataIonoscloudPrivateCrossconnectTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudPrivateCrossconnectConnectableDatacentersList <a name="DataIonoscloudPrivateCrossconnectConnectableDatacentersList" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.NewDataIonoscloudPrivateCrossconnectConnectableDatacentersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudPrivateCrossconnectConnectableDatacentersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get"></a>

```go
func Get(index *f64) DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference <a name="DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.NewDataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters">DataIonoscloudPrivateCrossconnectConnectableDatacenters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudPrivateCrossconnectConnectableDatacenters
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters">DataIonoscloudPrivateCrossconnectConnectableDatacenters</a>

---


### DataIonoscloudPrivateCrossconnectPeersList <a name="DataIonoscloudPrivateCrossconnectPeersList" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.NewDataIonoscloudPrivateCrossconnectPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudPrivateCrossconnectPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get"></a>

```go
func Get(index *f64) DataIonoscloudPrivateCrossconnectPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudPrivateCrossconnectPeersOutputReference <a name="DataIonoscloudPrivateCrossconnectPeersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.NewDataIonoscloudPrivateCrossconnectPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudPrivateCrossconnectPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterName">DatacenterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanName">LanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers">DataIonoscloudPrivateCrossconnectPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `DatacenterName`<sup>Required</sup> <a name="DatacenterName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterName"></a>

```go
func DatacenterName() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanName"></a>

```go
func LanName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudPrivateCrossconnectPeers
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers">DataIonoscloudPrivateCrossconnectPeers</a>

---


### DataIonoscloudPrivateCrossconnectTimeoutsOutputReference <a name="DataIonoscloudPrivateCrossconnectTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudprivatecrossconnect"

dataionoscloudprivatecrossconnect.NewDataIonoscloudPrivateCrossconnectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataIonoscloudPrivateCrossconnectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



