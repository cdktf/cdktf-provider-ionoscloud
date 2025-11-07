# `dataIonoscloudContracts` Submodule <a name="`dataIonoscloudContracts` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudContracts <a name="DataIonoscloudContracts" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/contracts ionoscloud_contracts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.NewDataIonoscloudContracts(scope Construct, id *string, config DataIonoscloudContractsConfig) DataIonoscloudContracts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig">DataIonoscloudContractsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig">DataIonoscloudContractsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudContracts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.DataIonoscloudContracts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.DataIonoscloudContracts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.DataIonoscloudContracts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.DataIonoscloudContracts_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudContracts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudContracts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudContracts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/contracts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudContracts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.contracts">Contracts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList">DataIonoscloudContractsContractsList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Contracts`<sup>Required</sup> <a name="Contracts" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.contracts"></a>

```go
func Contracts() DataIonoscloudContractsContractsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList">DataIonoscloudContractsContractsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContracts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudContractsConfig <a name="DataIonoscloudContractsConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

&dataionoscloudcontracts.DataIonoscloudContractsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

### DataIonoscloudContractsContracts <a name="DataIonoscloudContractsContracts" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContracts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContracts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

&dataionoscloudcontracts.DataIonoscloudContractsContracts {

}
```


### DataIonoscloudContractsContractsResourceLimits <a name="DataIonoscloudContractsContractsResourceLimits" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

&dataionoscloudcontracts.DataIonoscloudContractsContractsResourceLimits {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudContractsContractsList <a name="DataIonoscloudContractsContractsList" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.NewDataIonoscloudContractsContractsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudContractsContractsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.get"></a>

```go
func Get(index *f64) DataIonoscloudContractsContractsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudContractsContractsOutputReference <a name="DataIonoscloudContractsContractsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.NewDataIonoscloudContractsContractsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudContractsContractsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.contractNumber">ContractNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.regDomain">RegDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference">DataIonoscloudContractsContractsResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContracts">DataIonoscloudContractsContracts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContractNumber`<sup>Required</sup> <a name="ContractNumber" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.contractNumber"></a>

```go
func ContractNumber() *f64
```

- *Type:* *f64

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `RegDomain`<sup>Required</sup> <a name="RegDomain" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.regDomain"></a>

```go
func RegDomain() *string
```

- *Type:* *string

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.resourceLimits"></a>

```go
func ResourceLimits() DataIonoscloudContractsContractsResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference">DataIonoscloudContractsContractsResourceLimitsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudContractsContracts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContracts">DataIonoscloudContractsContracts</a>

---


### DataIonoscloudContractsContractsResourceLimitsOutputReference <a name="DataIonoscloudContractsContractsResourceLimitsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/dataionoscloudcontracts"

dataionoscloudcontracts.NewDataIonoscloudContractsContractsResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataIonoscloudContractsContractsResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.coresPerContract">CoresPerContract</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.coresPerServer">CoresPerServer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.coresProvisioned">CoresProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.dasVolumeProvisioned">DasVolumeProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.hddLimitPerContract">HddLimitPerContract</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.hddLimitPerVolume">HddLimitPerVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.hddVolumeProvisioned">HddVolumeProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.k8SClusterLimitTotal">K8SClusterLimitTotal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.k8SClustersProvisioned">K8SClustersProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.natGatewayLimitTotal">NatGatewayLimitTotal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.natGatewayProvisioned">NatGatewayProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.nlbLimitTotal">NlbLimitTotal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.nlbProvisioned">NlbProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ramPerContract">RamPerContract</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ramPerServer">RamPerServer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ramProvisioned">RamProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.reservableIps">ReservableIps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.reservedIpsInUse">ReservedIpsInUse</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.reservedIpsOnContract">ReservedIpsOnContract</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.rulesPerSecurityGroup">RulesPerSecurityGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.securityGroupsPerResource">SecurityGroupsPerResource</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.securityGroupsPerVdc">SecurityGroupsPerVdc</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ssdLimitPerContract">SsdLimitPerContract</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ssdLimitPerVolume">SsdLimitPerVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ssdVolumeProvisioned">SsdVolumeProvisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimits">DataIonoscloudContractsContractsResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoresPerContract`<sup>Required</sup> <a name="CoresPerContract" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.coresPerContract"></a>

```go
func CoresPerContract() *f64
```

- *Type:* *f64

---

##### `CoresPerServer`<sup>Required</sup> <a name="CoresPerServer" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.coresPerServer"></a>

```go
func CoresPerServer() *f64
```

- *Type:* *f64

---

##### `CoresProvisioned`<sup>Required</sup> <a name="CoresProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.coresProvisioned"></a>

```go
func CoresProvisioned() *f64
```

- *Type:* *f64

---

##### `DasVolumeProvisioned`<sup>Required</sup> <a name="DasVolumeProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.dasVolumeProvisioned"></a>

```go
func DasVolumeProvisioned() *f64
```

- *Type:* *f64

---

##### `HddLimitPerContract`<sup>Required</sup> <a name="HddLimitPerContract" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.hddLimitPerContract"></a>

```go
func HddLimitPerContract() *f64
```

- *Type:* *f64

---

##### `HddLimitPerVolume`<sup>Required</sup> <a name="HddLimitPerVolume" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.hddLimitPerVolume"></a>

```go
func HddLimitPerVolume() *f64
```

- *Type:* *f64

---

##### `HddVolumeProvisioned`<sup>Required</sup> <a name="HddVolumeProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.hddVolumeProvisioned"></a>

```go
func HddVolumeProvisioned() *f64
```

- *Type:* *f64

---

##### `K8SClusterLimitTotal`<sup>Required</sup> <a name="K8SClusterLimitTotal" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.k8SClusterLimitTotal"></a>

```go
func K8SClusterLimitTotal() *f64
```

- *Type:* *f64

---

##### `K8SClustersProvisioned`<sup>Required</sup> <a name="K8SClustersProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.k8SClustersProvisioned"></a>

```go
func K8SClustersProvisioned() *f64
```

- *Type:* *f64

---

##### `NatGatewayLimitTotal`<sup>Required</sup> <a name="NatGatewayLimitTotal" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.natGatewayLimitTotal"></a>

```go
func NatGatewayLimitTotal() *f64
```

- *Type:* *f64

---

##### `NatGatewayProvisioned`<sup>Required</sup> <a name="NatGatewayProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.natGatewayProvisioned"></a>

```go
func NatGatewayProvisioned() *f64
```

- *Type:* *f64

---

##### `NlbLimitTotal`<sup>Required</sup> <a name="NlbLimitTotal" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.nlbLimitTotal"></a>

```go
func NlbLimitTotal() *f64
```

- *Type:* *f64

---

##### `NlbProvisioned`<sup>Required</sup> <a name="NlbProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.nlbProvisioned"></a>

```go
func NlbProvisioned() *f64
```

- *Type:* *f64

---

##### `RamPerContract`<sup>Required</sup> <a name="RamPerContract" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ramPerContract"></a>

```go
func RamPerContract() *f64
```

- *Type:* *f64

---

##### `RamPerServer`<sup>Required</sup> <a name="RamPerServer" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ramPerServer"></a>

```go
func RamPerServer() *f64
```

- *Type:* *f64

---

##### `RamProvisioned`<sup>Required</sup> <a name="RamProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ramProvisioned"></a>

```go
func RamProvisioned() *f64
```

- *Type:* *f64

---

##### `ReservableIps`<sup>Required</sup> <a name="ReservableIps" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.reservableIps"></a>

```go
func ReservableIps() *f64
```

- *Type:* *f64

---

##### `ReservedIpsInUse`<sup>Required</sup> <a name="ReservedIpsInUse" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.reservedIpsInUse"></a>

```go
func ReservedIpsInUse() *f64
```

- *Type:* *f64

---

##### `ReservedIpsOnContract`<sup>Required</sup> <a name="ReservedIpsOnContract" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.reservedIpsOnContract"></a>

```go
func ReservedIpsOnContract() *f64
```

- *Type:* *f64

---

##### `RulesPerSecurityGroup`<sup>Required</sup> <a name="RulesPerSecurityGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.rulesPerSecurityGroup"></a>

```go
func RulesPerSecurityGroup() *f64
```

- *Type:* *f64

---

##### `SecurityGroupsPerResource`<sup>Required</sup> <a name="SecurityGroupsPerResource" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.securityGroupsPerResource"></a>

```go
func SecurityGroupsPerResource() *f64
```

- *Type:* *f64

---

##### `SecurityGroupsPerVdc`<sup>Required</sup> <a name="SecurityGroupsPerVdc" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.securityGroupsPerVdc"></a>

```go
func SecurityGroupsPerVdc() *f64
```

- *Type:* *f64

---

##### `SsdLimitPerContract`<sup>Required</sup> <a name="SsdLimitPerContract" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ssdLimitPerContract"></a>

```go
func SsdLimitPerContract() *f64
```

- *Type:* *f64

---

##### `SsdLimitPerVolume`<sup>Required</sup> <a name="SsdLimitPerVolume" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ssdLimitPerVolume"></a>

```go
func SsdLimitPerVolume() *f64
```

- *Type:* *f64

---

##### `SsdVolumeProvisioned`<sup>Required</sup> <a name="SsdVolumeProvisioned" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.ssdVolumeProvisioned"></a>

```go
func SsdVolumeProvisioned() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudContractsContractsResourceLimits
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudContracts.DataIonoscloudContractsContractsResourceLimits">DataIonoscloudContractsContractsResourceLimits</a>

---



